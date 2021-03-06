const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const PhotoApiUtil = require('../util/photo_api_util');

const PhotoActions = {
  fetchAllPhotos() {
    PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
  },
  fetchPhoto(id) {
    PhotoApiUtil.fetchPhoto(id, PhotoActions.receivePhoto);
  },
  createPhoto(data) {
    PhotoApiUtil.createPhoto(data, PhotoActions.receivePhoto);
  },
  editPhoto(data) {
    PhotoApiUtil.updatePhoto(data, PhotoActions.receivePhoto);
  },
  deletePhoto(id) {
    PhotoApiUtil.deletePhoto(id, PhotoActions.removePhoto);
  },

  receiveAllPhotos(photos) {
    AppDispatcher.dispatch({
      actionType: "PHOTOS_RECEIVED",
      photos: photos
    });
  },
  receivePhoto(photo) {
    AppDispatcher.dispatch({
      actionType: "PHOTO_RECEIVED",
      photo: photo
    })
  },
  removePhoto(photo) {
    AppDispatcher.dispatch({
      actionType: "PHOTO_REMOVED",
      photo: photo
    })
  }
};

module.exports = PhotoActions;
