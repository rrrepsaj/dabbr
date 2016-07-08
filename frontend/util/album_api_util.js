const AlbumApiUtil = {
  fetchAlbum(id, callback) {
    $.ajax({
      url: `api/albums/${id}`,
      success: function(response) {
        callback(response.album);
      },
      error: function() {
        console.log("Error in AlbumApiUtil#fetchAlbum");
      }
    })
  },
  createAlbum(data, callback) {
    $.ajax({
      url: `api/albums`,
      method: 'post',
      data: { album: data },
      success: function(response) {
        callback(response);
      },
      error: function() {
        console.log("Error in AlbumApiUtil#createAlbum");
      }
    })
  }
}

module.exports = AlbumApiUtil;
