const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const AlbumConstants = require('../constants/album_constants');

const AlbumStore = new Store(AppDispatcher);

let _albums = {};

AlbumStore.all = function() {
  return _albums;
};

AlbumStore.find = function(id) {
  return _albums[id];
}

function addAlbum(album) {
  _albums[album.album.id] = album;
  AlbumStore.__emitChange();
}

AlbumStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AlbumConstants.RECEIVE_ALBUM:
      addAlbum(payload.album);
      break;
  }
};

module.exports = window.AlbumStore = AlbumStore;
