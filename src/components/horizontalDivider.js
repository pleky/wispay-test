import styled from 'styled-components/native';
import { DIVIDER_COLOR } from 'utils/constants/colors';

const HorizontalDivider = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 5px;
  background-color: ${DIVIDER_COLOR};
`;

export default HorizontalDivider;
