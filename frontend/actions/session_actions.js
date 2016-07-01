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
  fetchCurrentUser(complete) {
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },
  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNIN,
      currentUser: currentUser
    });
  },
  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNOUT
    });
    // hashHistory.push("/signin");
    hashHistory.push("/");
  }
};

module.exports = SessionActions;
