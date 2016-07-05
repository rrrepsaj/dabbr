const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const PhotoApiUtil = require('../util/photo_api_util');

const PhotoActions = {
  fetchAllPhotos() {
    PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
  },
  fetchPhoto(photoId) {
    console.log("in fetchPhoto");
    PhotoApiUtil.fetchPhoto(photoId, PhotoActions.receivePhoto);
  },
  receiveAllPhotos(photos) {
    AppDispatcher.dispatch({
      actionType: "PHOTOS_RECEIVED",
      photos: photos
    });
  },
  receivePhoto(photo) {
    console.log("in receivePhoto");
    AppDispatcher.dispatch({
      actionType: "PHOTO_RECEIVED",
      photo: photo
    })
  }
};

module.exports = PhotoActions;
