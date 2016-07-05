const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
let _photos = {};
const PhotoStore = new Store(AppDispatcher);

PhotoStore.all = function() {
  return Object.keys(_photos).map(key => {
    return _photos[key];
  });
};

function resetAllPhotos (photos) {
  _photos = photos;
  PhotoStore.__emitChange();
}

function resetPhoto (photo) {
  _photos[photo.id] = photo;
  PhotoStore.__emitChange();
}

PhotoStore.find = function(photoId) {
  return _photos[photoId];
}

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
      resetAllPhotos(payload.photos);
      break;
    case PhotoConstants.PHOTO_RECEIVED:
      console.log("in photoStore");
      resetPhoto(payload.photo);
      break;
  }
};

module.exports = PhotoStore;
