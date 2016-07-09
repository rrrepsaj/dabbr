const AppDispatcher = require('../dispatcher/dispatcher');
const UserApiUtil = require('../util/user_api_util');
const UserConstants = require('../constants/user_constants');

const UserActions = {
  fetchUserProfile(id) {
    UserApiUtil.fetchUserProfile(id, UserActions.receiveUserProfile);
  },

  editUserProfile(data) {
    UserApiUtil.editUserProfile(data, UserActions.receiveUserProfile)
  },

  receiveUserProfile(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    })
  }
};

module.exports = UserActions;
