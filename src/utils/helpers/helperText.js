import { fontSize, textVariant, textWeight } from 'utils/constants/typography';

const helperText = {
  getVariant: variant => {
    switch (variant) {
      case textVariant.body1:
        return fontSize.body1;
      case textVariant.body2:
        return fontSize.body2;
      case textVariant.subtitle1:
        return fontSize.subtitle1;
      case textVariant.subtitle2:
        return fontSize.subtitle2;
      case textVariant.heading1:
        return fontSize.heading1;
      case textVariant.heading1:
        return fontSize.heading1;
      case textVariant.caption:
        return fontSize.caption;
      default:
        return fontSize.body1;
    }
  },
  getFontWeight: fontWeight => {
    switch (fontWeight) {
      case textWeight.bold:
        return textWeight.bold;
      case textWeight.light:
        return textWeight.light;
      case textWeight.lighter:
        return textWeight.lighter;
      default:
        return textWeight.normal;
    }
  },
};

export default helperText;
