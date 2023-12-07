/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';

export const OptionsListStrings = {
  control: {
    getSeparator: (type?: string) => {
      if (type === 'date') {
        return i18n.translate('controls.optionsList.control.dateSeparator', {
          defaultMessage: ';  ',
        });
      }
      return i18n.translate('controls.optionsList.control.separator', {
        defaultMessage: ', ',
      });
    },
    getPlaceholder: () =>
      i18n.translate('controls.optionsList.control.placeholder', {
        defaultMessage: 'Selecione...',
      }),
    getNegate: () =>
      i18n.translate('controls.optionsList.control.negate', {
        defaultMessage: 'Não',
      }),
    getExcludeExists: () =>
      i18n.translate('controls.optionsList.control.excludeExists', {
        defaultMessage: 'Não existe',
      }),
  },
  editor: {
    getSelectionOptionsTitle: () =>
      i18n.translate('controls.optionsList.editor.selectionOptionsTitle', {
        defaultMessage: 'Seleções',
      }),
    selectionTypes: {
      multi: {
        getLabel: () =>
          i18n.translate('controls.optionsList.editor.multiSelectLabel', {
            defaultMessage: 'Allow  multiple selections',
          }),
      },
      single: {
        getLabel: () =>
          i18n.translate('controls.optionsList.editor.singleSelectLabel', {
            defaultMessage: 'Only allow a single selection',
          }),
      },
    },
    getSearchOptionsTitle: () =>
      i18n.translate('controls.optionsList.editor.searchOptionsTitle', {
        defaultMessage: `Searching`,
      }),
    searchTypes: {
      prefix: {
        getLabel: () =>
          i18n.translate('controls.optionsList.editor.prefixSearchLabel', {
            defaultMessage: 'Prefix',
          }),
        getTooltip: () =>
          i18n.translate('controls.optionsList.editor.prefixSearchTooltip', {
            defaultMessage: 'Matches values that begin with the given search string.',
          }),
      },
      wildcard: {
        getLabel: () =>
          i18n.translate('controls.optionsList.editor.wildcardSearchLabel', {
            defaultMessage: 'Contains',
          }),
        getTooltip: () =>
          i18n.translate('controls.optionsList.editor.wildcardSearchTooltip', {
            defaultMessage:
              'Matches values that contain the given search string. Results might take longer to populate.',
          }),
      },
    },
    getAdditionalSettingsTitle: () =>
      i18n.translate('controls.optionsList.editor.additionalSettingsTitle', {
        defaultMessage: `Additional settings`,
      }),
    getRunPastTimeoutTitle: () =>
      i18n.translate('controls.optionsList.editor.runPastTimeout', {
        defaultMessage: 'Ignore timeout for results',
      }),
    getRunPastTimeoutTooltip: () =>
      i18n.translate('controls.optionsList.editor.runPastTimeout.tooltip', {
        defaultMessage:
          'Wait to display results until the list is complete. This setting is useful for large data sets, but the results might take longer to populate.',
      }),
  },
  popover: {
    getAriaLabel: (fieldName: string) =>
      i18n.translate('controls.optionsList.popover.ariaLabel', {
        defaultMessage: 'Popover for {fieldName} control',
        values: { fieldName },
      }),
    getSuggestionsAriaLabel: (fieldName: string, optionCount: number) =>
      i18n.translate('controls.optionsList.popover.suggestionsAriaLabel', {
        defaultMessage:
          'Available {optionCount, plural, one {option} other {options}} for {fieldName}',
        values: { fieldName, optionCount },
      }),
    getAllowExpensiveQueriesWarning: () =>
      i18n.translate('controls.optionsList.popover.allowExpensiveQueriesWarning', {
        defaultMessage:
          'The cluster setting to allow expensive queries is off, so some features are disabled.',
      }),
    getLoadingMoreMessage: () =>
      i18n.translate('controls.optionsList.popover.loadingMore', {
        defaultMessage: 'Lendo mais opções...',
      }),
    getAtEndOfOptionsMessage: () =>
      i18n.translate('controls.optionsList.popover.endOfOptions', {
        defaultMessage:
          'The top 1,000 available options are displayed. View more options by searching for the name.',
      }),
    getEmptyMessage: () =>
      i18n.translate('controls.optionsList.popover.empty', {
        defaultMessage: 'No options found',
      }),
    getSelectionsEmptyMessage: () =>
      i18n.translate('controls.optionsList.popover.selectionsEmpty', {
        defaultMessage: 'Você não tem seleções',
      }),
    getAllOptionsButtonTitle: () =>
      i18n.translate('controls.optionsList.popover.allOptionsTitle', {
        defaultMessage: 'Selecione todas as opções',
      }),
    getSelectedOptionsButtonTitle: () =>
      i18n.translate('controls.optionsList.popover.selectedOptionsTitle', {
        defaultMessage: 'Mostrar apenas as opções selecionadas',
      }),
    searchPlaceholder: {
      prefix: {
        getPlaceholderText: () =>
          i18n.translate('controls.optionsList.popover.prefixSearchPlaceholder', {
            defaultMessage: 'Inicie com...',
          }),
      },
      wildcard: {
        getPlaceholderText: () =>
          i18n.translate('controls.optionsList.popover.wildcardSearchPlaceholder', {
            defaultMessage: 'Contains...',
          }),
      },
    },
    getCardinalityLabel: (totalOptions: number) =>
      i18n.translate('controls.optionsList.popover.cardinalityLabel', {
        defaultMessage:
          '{totalOptions, number} {totalOptions, plural, one {opção} other {opções}}',
        values: { totalOptions },
      }),
    getInvalidSelectionsSectionAriaLabel: (fieldName: string, invalidSelectionCount: number) =>
      i18n.translate('controls.optionsList.popover.invalidSelectionsAriaLabel', {
        defaultMessage:
          'Ignored {invalidSelectionCount, plural, one {selection} other {selections}} for {fieldName}',
        values: { fieldName, invalidSelectionCount },
      }),
    getInvalidSelectionsSectionTitle: (invalidSelectionCount: number) =>
      i18n.translate('controls.optionsList.popover.invalidSelectionsSectionTitle', {
        defaultMessage:
          'Ignored {invalidSelectionCount, plural, one {selection} other {selections}}',
        values: { invalidSelectionCount },
      }),
    getInvalidSelectionsLabel: (selectedOptions: number) =>
      i18n.translate('controls.optionsList.popover.invalidSelectionsLabel', {
        defaultMessage:
          '{selectedOptions} {selectedOptions, plural, one {selection} other {selections}} ignored',
        values: { selectedOptions },
      }),
    getInvalidSelectionScreenReaderText: () =>
      i18n.translate('controls.optionsList.popover.invalidSelectionScreenReaderText', {
        defaultMessage: 'Invalid selection.',
      }),
    getIncludeLabel: () =>
      i18n.translate('controls.optionsList.popover.includeLabel', {
        defaultMessage: 'Incluir',
      }),
    getExcludeLabel: () =>
      i18n.translate('controls.optionsList.popover.excludeLabel', {
        defaultMessage: 'Excluir',
      }),
    getIncludeExcludeLegend: () =>
      i18n.translate('controls.optionsList.popover.excludeOptionsLegend', {
        defaultMessage: 'Include or exclude selections',
      }),
    getSortPopoverTitle: () =>
      i18n.translate('controls.optionsList.popover.sortTitle', {
        defaultMessage: 'Ordenar',
      }),
    getSortPopoverDescription: () =>
      i18n.translate('controls.optionsList.popover.sortDescription', {
        defaultMessage: 'Defina a ordem de seleção',
      }),
    getSortDisabledTooltip: () =>
      i18n.translate('controls.optionsList.popover.sortDisabledTooltip', {
        defaultMessage: 'Sorting is ignored when “Show only selected” is true',
      }),
    getDocumentCountTooltip: (documentCount: number) =>
      i18n.translate('controls.optionsList.popover.documentCountTooltip', {
        defaultMessage:
          'This value appears in {documentCount, number} {documentCount, plural, one {document} other {documents}}',
        values: { documentCount },
      }),
    getDocumentCountScreenReaderText: (documentCount: number) =>
      i18n.translate('controls.optionsList.popover.documentCountScreenReaderText', {
        defaultMessage:
          'Appears in {documentCount, number} {documentCount, plural, one {document} other {documents}}',
        values: { documentCount },
      }),
  },
  controlAndPopover: {
    getExists: (negate: number = +false) =>
      i18n.translate('controls.optionsList.controlAndPopover.exists', {
        defaultMessage: '{negate, plural, one {Exist} other {Exists}}',
        values: { negate },
      }),
  },
  editorAndPopover: {
    getSortDirectionLegend: () =>
      i18n.translate('controls.optionsList.popover.sortDirections', {
        defaultMessage: 'Sort directions',
      }),
    sortBy: {
      _count: {
        getSortByLabel: () =>
          i18n.translate('controls.optionsList.popover.sortBy.docCount', {
            defaultMessage: 'Por contagem de documentos',
          }),
      },
      _key: {
        getSortByLabel: (type?: string) =>
          type === 'date'
            ? i18n.translate('controls.optionsList.popover.sortBy.date', {
                defaultMessage: 'Pela data',
              })
            : i18n.translate('controls.optionsList.popover.sortBy.alphabetical', {
                defaultMessage: 'Alfabeticamente',
              }),
      },
    },
    sortOrder: {
      asc: {
        getSortOrderLabel: () =>
          i18n.translate('controls.optionsList.popover.sortOrder.asc', {
            defaultMessage: 'Ascendente',
          }),
      },
      desc: {
        getSortOrderLabel: () =>
          i18n.translate('controls.optionsList.popover.sortOrder.desc', {
            defaultMessage: 'Descendente',
          }),
      },
    },
  },
};
