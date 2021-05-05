import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { helperText } from 'utils';
import { COLOR_BLACK } from 'utils/constants/colors';

const Text = styled.Text`
  font-size: ${({ variant }) => helperText.getVariant(variant)}px;
  font-weight: ${({ fontWeight }) => helperText.getFontWeight(fontWeight)};
  color: ${({ color }) => color};
`;

const CustomText = props => {
  return <Text {...props}>{props.children}</Text>;
};

CustomText.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'heading1',
    'heading2',
    'caption',
    'subtitle1',
    'subtitle2',
  ]),
  fontWeight: PropTypes.oneOf(['light', 'lighter', 'normal', 'bold']),
};

CustomText.defaultProps = {
  variant: 'body1',
  fontWeight: 'normal',
  color: COLOR_BLACK,
};

export default CustomText;
