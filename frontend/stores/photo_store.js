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
  // _photos = {};
  // photos.forEach(photo => {
  //   _photos[photo.id] = photo;
  // });

  _photos = photos;
  PhotoStore.__emitChange();
}

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED;
      resetAllPhotos(payload.benches);
      break;
  }
};

module.exports = PhotoStore;
