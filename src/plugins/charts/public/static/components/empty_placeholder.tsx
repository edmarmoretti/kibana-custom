/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React, { useEffect } from 'react';
import { EuiIcon, EuiText, IconType, EuiSpacer } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import { css } from '@emotion/react';

export interface EmptyPlaceholderProps {
  icon: IconType;
  iconColor?: string;
  message?: JSX.Element | string;
  dataTestSubj?: string;
  className?: string;
  renderComplete?: () => void;
}

const style = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//Edmar Moretti - tradução Nenhum resultado encontrado
export const EmptyPlaceholder = ({
  icon,
  iconColor = 'subdued',
  message = <FormattedMessage id="charts.noDataLabel" defaultMessage="Nenhum resultado encontrado" />,
  dataTestSubj = 'emptyPlaceholder',
  className,
  renderComplete,
}: EmptyPlaceholderProps) => {
  useEffect(() => {
    renderComplete?.();
  }, [renderComplete]);

  return (
    <div className={className} css={style}>
      <EuiText data-test-subj={dataTestSubj} textAlign="center" color="subdued" size="xs">
        <EuiIcon type={icon} color={iconColor} size="l" />
        <EuiSpacer size="s" />
        <p>{message}</p>
      </EuiText>
    </div>
  );
};
