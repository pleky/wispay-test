import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  ${({ flex }) => (flex ? `flex: ${flex}` : null)};
`;

export default Row;
