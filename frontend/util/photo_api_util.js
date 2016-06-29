const PhotoApiUtil = {
  fetchAllPhotos(callback) {
    $.ajax({
      url: `api/photos`,
      success: function(photos) {
        callback(photos);
      }
    })
  }
};

module.exports = PhotoApiUtil;
