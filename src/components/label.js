import * as React from 'react';
import styled from 'styled-components/native';
import { helperStatus } from 'utils';
import { COLOR_WHITE } from 'utils/constants/colors';
import { saleStatus } from 'utils/constants/statuses';
import CustomText from './customText';

const LabelStyled = styled.View`
  background-color: ${({ status }) => helperStatus.getStatusColor(status)};
  border-radius: 5px;
  padding: 2px 15px;
`;

const Label = ({ status }) => {
  return (
    <LabelStyled status={status}>
      <CustomText variant="subtitle1" fontWeight="bold" color={COLOR_WHITE}>
        {saleStatus[status]}
      </CustomText>
    </LabelStyled>
  );
};

export default Label;
