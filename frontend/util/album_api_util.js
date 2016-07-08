const AlbumApiUtil = {
  fetchAlbum(id, callback) {
    $.ajax({
      url: `api/albums/${id}`,
      success: function(album) {
        callback(album);
      },
      error: function(d) {
        console.log("Error in AlbumApiUtil#fetchAlbum");
      }
    })
  },
  createAlbum(data, callback) {
    $.ajax({
      url: `api/albums`,
      method: 'post',
      data: { album: data },
      success: function(album) {
        callback(album);
      },
      error: function() {
        console.log("Error in AlbumApiUtil#createAlbum");
      }
    })
  }
}

module.exports = AlbumApiUtil;
