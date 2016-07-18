const PhotoApiUtil = {
  fetchAllPhotos(callback) {
    $.ajax({
      url: `api/photos`,
      success: function(photos) {
        callback(photos);
      }
    })
  },
  fetchPhoto(id, callback) {
    $.ajax({
      url: `api/photos/${id}`,
      success: function(response) {
        callback(response.photo);
      }
    })
  },
  createPhoto(data, callback) {
    $.ajax({
      url: `api/photos`,
      method: 'post',
      data: { photo: data },
      success: function(photo) {
        callback(photo);
      }
    })
  },
  updatePhoto(data, callback) {
    $.ajax({
      url: `api/photos/${data.id}`,
      method: 'patch',
      data: { photo: { title: data.title, description: data.description, url: data.url, user: data.user, album: data.album, id: data.id } },
      success: function(photo) {
        callback(photo);
      }
    })
  },
  deletePhoto(id, callback) {
    $.ajax({
      url: `api/photos/${id}`,
      method: 'delete',
      success: function(photo) {
        callback(photo);
      }
    })
  }
};

module.exports = PhotoApiUtil;
