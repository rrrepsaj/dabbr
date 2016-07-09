const UserApiUtil = {
  fetchUserProfile(id, callback) {
    $.ajax({
      url: `api/users/${id}`,
      success(user) {
        callback(user);
      }
    });
  },

  editUserProfile(data, callback) {
    $.ajax({
      url: `api/users/${data.id}`,
      method: 'patch',
      data: { user: data },
      success(user) {
        callback(user);
      }
    });
  }
};

module.exports = UserApiUtil;
