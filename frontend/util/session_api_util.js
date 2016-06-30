const SessionApiUtil = {
  signIn(user, success, error) {
    debugger
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
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
      url: 'api/user',
      type: 'POST',
      dataType: 'json',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success, complete) {
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success,
      error: function (xhr) {
        console.log("Error in SessionApiUtil#fetchCurrentUser");
      },
      complete: function() {
        conplete();
      }
    });
  }
};

module.exports = SessionApiUtil;
