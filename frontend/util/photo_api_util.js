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
    console.log("in photoApiUtil");
    $.ajax({
      url: `api/photos/${id}`,
      success: function(photo) {
        console.log("in fetchPhoto success");
        callback(photo);
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
  editPhoto(data, callback) {
    $.ajax({
      url: `api/photos/${data.id}`,
      method: 'patch',
      data: { photo: { title: data.title, description: data.description } },
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
