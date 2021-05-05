const {
  ICON_BATHROOM_ID,
  ICON_BEDROOM_ID,
  ICON_LAND_ID,
  iconImages,
  ICON_CAR,
  ICON_CARPORT,
  ICON_STAIR,
  ICON_PHONE,
  ICON_FLASH,
} = require('utils/constants/icons');

const helperIcons = {
  getIcons: iconId => {
    switch (iconId) {
      case ICON_BATHROOM_ID:
        return iconImages.bathroom;
      case ICON_LAND_ID:
        return iconImages.land;
      case ICON_BEDROOM_ID:
        return iconImages.bedroom;
      case ICON_CAR:
        return iconImages.car;
      case ICON_CARPORT:
        return iconImages.carport;
      case ICON_STAIR:
        return iconImages.stair;
      case ICON_FLASH:
        return iconImages.flash;
      default:
        return iconImages.phone;
    }
  },
};

export default helperIcons;
