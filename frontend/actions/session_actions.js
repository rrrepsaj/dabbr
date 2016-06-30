const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signup(formData) {
    SessionApiUtil.signup(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  signin(formData) {
    SessionApiUtil.signin(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  signout() {
    SessionApiUtil.signout(SessionActions.removeCurrentUser);
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
    hashHistory.push("/signin");
  }
};

module.exports = SessionActions;
