const SessionApiUtil = {
  signIn(user, success, error) {
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { user },
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("signin", errors);
      }
    });
  },

  signOut(success) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success,
      error: function() {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: { user },
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success) {
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success,
      error: function (xhr) {
        console.log("Error in SessionApiUtil#fetchCurrentUser");
        // console.log(success);
      }
    });
  }
};

module.exports = SessionApiUtil;
