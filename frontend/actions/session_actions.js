const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signUp(formData) {
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  signIn(formData) {
    SessionApiUtil.signIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  signOut() {
    SessionApiUtil.signOut(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser() {
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser);
  },

  receiveCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNIN,
      currentUser: user
    });
    hashHistory.push('/photos');
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNOUT
    });
    hashHistory.push("/");
  }
};

module.exports = SessionActions;
