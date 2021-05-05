import * as React from 'react';
import { Image } from 'react-native';
import { helperIcons } from 'utils';

const CustomIcon = ({ iconId, width = 30, height = 30 }) => {
  return (
    <Image
      style={{ width: width, height: height }}
      resizeMethod="scale"
      resizeMode="contain"
      source={helperIcons.getIcons(iconId)}
    />
  );
};

export default CustomIcon;
