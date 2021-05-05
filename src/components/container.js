import styled from 'styled-components/native';
import { COLOR_WHITE } from 'utils/constants/colors';

const Container = styled.View`
  ${({ padding }) => (padding ? `padding: ${padding}px` : null)}
  ${({ margin }) => (margin ? `margin: ${margin}px` : null)}
  ${({ ml }) => (ml ? `margin-left: ${ml}px` : null)}
  ${({ mt }) => (mt ? `margin-top: ${mt}px` : null)}
  ${({ mr }) => (mr ? `margin-right: ${mr}px` : null)}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px` : null)}
  ${({ pl }) => (pl ? `padding-left: ${pl}px` : null)}
  ${({ pr }) => (pr ? `padding-right: ${pr}px` : null)}
  ${({ pb }) => (pb ? `padding-bottom: ${pb}px` : null)}
  ${({ pt }) => (pt ? `padding-top: ${pt}px` : null)}
  background-color: ${({ bgColor }) => bgColor ?? COLOR_WHITE};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius ?? 0}px;
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius ?? 0}px;
  ${({ borderTopColor }) =>
    borderTopColor ? `border-top-color: ${borderTopColor}` : null}
  ${({ borderTopWidth }) =>
    borderTopWidth ? `border-top-width: ${borderTopWidth}px` : null}
`;

export default Container;
