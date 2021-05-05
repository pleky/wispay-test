const { COLOR_GREEN, COLOR_BLUE } = require('utils/constants/colors');
const { RENT, SALE } = require('utils/constants/statuses');

const helperStatus = {
  getStatusColor: status => {
    if (status === RENT) {
      return COLOR_GREEN;
    }
    if (status === SALE) {
      return COLOR_BLUE;
    }
  },
};

export default helperStatus;
