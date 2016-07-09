const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const AlbumConstants = require('../constants/album_constants');

const AlbumStore = new Store(AppDispatcher);

let _albums = {};

AlbumStore.all = function() {
  // return _albums;
  return Object.keys(_albums).map(key => {
    return _albums[key];
  })
};

function resetAllAlbums (albums) {
  albums.forEach(album => {
    _albums[album.id] = album;
  });
  AlbumStore.__emitChange();
}

function resetAlbum (album) {
  _albums[album.id] = album;
  AlbumStore.__emitChange();
}

AlbumStore.find = function(albumId) {
  return _albums[albumId];
}

AlbumStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AlbumConstants.RECEIVE_ALBUM:
      resetAlbum(payload.album);
      break;
  }
};

module.exports = window.AlbumStore = AlbumStore;
