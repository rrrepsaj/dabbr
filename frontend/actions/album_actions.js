const AppDispatcher = require('../dispatcher/dispatcher');
const AlbumConstants = require('../constants/album_constants');
const AlbumApiUtil = require('../util/album_api_util');

const AlbumActions = {
  fetchAlbum(id) {
    AlbumApiUtil.fetchAlbum(id, AlbumActions.receiveAlbum);
  },
  createAlbum(data) {
    AlbumApiUtil.createAlbum(data, AlbumActions.receiveAlbum);
  },

  receiveAlbum(album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.RECEIVE_ALBUM,
      album: album
    });
  }
};

module.exports = AlbumActions;
