/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
//incluido useState
import React, { useState, useContext, useEffect } from 'react';
import { EuiDataGridCellValueElementProps, EuiLink } from '@elastic/eui';
import classNames from 'classnames';
import { PaletteOutput } from '@kbn/coloring';
import { CustomPaletteState } from '@kbn/charts-plugin/common';
import type { FormatFactory } from '../../../../common/types';
import type { DatatableColumnConfig } from '../../../../common/expressions';
import type { DataContextType } from './types';
import { getContrastColor } from '../../../shared_components/coloring/utils';
import { CellColorFn } from '../../../shared_components/coloring/get_cell_color_fn';

import { isLensRange } from '../../../utils';

const getParsedValue = (v: unknown) => {
  if (v == null || typeof v === 'number') {
    return v;
  }
  if (isLensRange(v)) {
    return v.toString();
  }
  return String(v);
};


//Edmar Moretti - componentes para poder abrir link em janela interna
import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiButtonEmpty
} from '@elastic/eui';

export const createGridCell = (
  formatters: Record<string, ReturnType<FormatFactory>>,
  columnConfig: DatatableColumnConfig,
  DataContext: React.Context<DataContextType>,
  isDarkMode: boolean,
  getCellColor: (
    originalId: string,
    palette?: PaletteOutput<CustomPaletteState>,
    colorMapping?: string
  ) => CellColorFn,
  fitRowToContent?: boolean
) => {
  return ({ rowIndex, columnId, setCellProps, isExpanded }: EuiDataGridCellValueElementProps) => {
    const { table, alignments, handleFilterClick } = useContext(DataContext);
    const rawRowValue = table?.rows[rowIndex]?.[columnId];
    const rowValue = getParsedValue(rawRowValue);
    const colIndex = columnConfig.columns.findIndex(({ columnId: id }) => id === columnId);
    const {
      oneClickFilter,
      colorMode = 'none',
      palette,
      colorMapping,
    } = columnConfig.columns[colIndex] ?? {};
    const filterOnClick = oneClickFilter && handleFilterClick;


    let content = formatters[columnId]?.convert(rowValue, filterOnClick ? 'text' : 'html');
    //Edmar Moretti - ajusta os valores decimais removendo ,00 quando necessário
    if (content.substring(0,2) == "R$" && !content.split(',')[1]) {
      content = content + ',00';
    }
    if(content.substring(0,2) !== "R$" && content.split("%").length == 1 && content.split(",00").length == 2){
      content = content.split(",00")[0];
    }
    if(content == '(empty)'){
      content = '';
    }
    const currentAlignment = alignments && alignments.get(columnId);
    //Edmar Moretti - corrige os nomes dos meses
    //Feb,Apr,May,Aug,Sep,Oct,Dec
    content = content.replace('Feb/','Fev/');
    content = content.replace('Apr/','Abr/');
    content = content.replace('May/','Mai/');
    content = content.replace('Aug/','Ago/');
    content = content.replace('Sep/','Set/');
    content = content.replace('Oct/','Out/');
    content = content.replace('Dec/','Dez/');
    //content = content.replace('July/','Julho/');

    useEffect(() => {
      let colorSet = false;
      if (colorMode !== 'none' && (palette || colorMapping)) {
        const color = getCellColor(columnId, palette, colorMapping)(rowValue);

        if (color) {
          const style = { [colorMode === 'cell' ? 'backgroundColor' : 'color']: color };
          if (colorMode === 'cell' && color) {
            style.color = getContrastColor(color, isDarkMode);
          }
          colorSet = true;
          setCellProps({ style });
        }
      }

      // Clean up styles when something changes, this avoids cell's styling to stick forever
      // Checks isExpanded to prevent clearing style after expanding cell
      if (colorSet && !isExpanded) {
        return () => {
          setCellProps({
            style: {
              backgroundColor: undefined,
              color: undefined,
            },
          });
        };
      }
    }, [rowValue, columnId, setCellProps, colorMode, palette, colorMapping, isExpanded]);
    //Edmar Moretti - cria o botão que abre o link em um iframe quando a url possuir a palavra flyout
    const regex = /<a[^>]*>(.*?)<\/a>/;
    let match = content.match(regex);
    const label = match ? match[1] : "";
    if (content.indexOf('flyout') > 0) {
      // @ts-ignore
      if(typeof window.abreFichaIndicador === 'function'){
        const abreFicha = function(indicador: string){
          // @ts-ignore
          window.abreFichaIndicador(indicador); // eslint-disable-line react/no-danger
        };

        match = content.match(/\/([A-Z0-9]+)-/i);
        const codigo = match ? match[1] : '';
        console.log("codigo: " + codigo);
        return (
          <div>
          <EuiButtonEmpty iconType="lensApp" size="xs" color='primary' onClick={() => abreFicha(codigo)}>
            {label != "" ? label : "Abrir"}
          </EuiButtonEmpty>
        </div>
        );
      }
      const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
      let iframe = '<iframe class="flyoutIframe" style="position: fixed; height: 100vh; width: 45vw;" src="' + content + '"></iframe>';
      function Iframe(props: { iframe: string; }) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      };
      let flyout;
      if (isFlyoutVisible) {
        flyout = (
          <EuiFlyout onClose={() => setIsFlyoutVisible(false)}>
            <EuiFlyoutBody>
              <Iframe iframe={iframe} />
            </EuiFlyoutBody>
          </EuiFlyout>
        );
      }
      
      return (
        <div>
        <EuiButtonEmpty iconType="lensApp" size="xs" color='primary' onClick={() => setIsFlyoutVisible(true)}>
        {label != "" ? label : "Abrir"}
        </EuiButtonEmpty>
        {flyout}
      </div>
      );
    }

    if (filterOnClick) {
      return (
        <div
          data-test-subj="lnsTableCellContent"
          className={classNames({
            'lnsTableCell--multiline': fitRowToContent,
            [`lnsTableCell--${currentAlignment}`]: true,
          })}
        >
          <EuiLink
            onClick={() => {
              handleFilterClick?.(columnId, rawRowValue, colIndex, rowIndex);
            }}
          >
            {content}
          </EuiLink>
        </div>
      );
    }

    return (
      <div
        /*
         * dangerouslySetInnerHTML is necessary because the field formatter might produce HTML markup
         * which is produced in a safe way.
         */
        dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
        data-test-subj="lnsTableCellContent"
        className={classNames({
          'lnsTableCell--multiline': fitRowToContent,
          'lnsTableCell--colored': colorMode !== 'none',
          [`lnsTableCell--${currentAlignment}`]: true,
        })}
      />
    );
  };
};
