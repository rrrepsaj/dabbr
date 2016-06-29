const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');

const PhotoActions = {
  fetchAllPhotos() {
    PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
  },
  receiveAllPhotos(photos) {
    AppDispatcher.dispatch({
      actionType: "PHOTOS_RECEIVED",
      photos: photos
    });
  }
};

module.exports = PhotoActions;
