const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

const _signin = function(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;

};

const _signout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = false;
}

SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.SIGNIN:
      _signin(payload.currentUser);
      // SessionStore.__emitChange();
      break;
    case SessionConstants.SIGNOUT:
      _signout();
      // SessionStore.__emitChange();
      break;
  }
  SessionStore.__emitChange();
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserSignedIn = function() {

  return !!_currentUser.id;
};

module.exports = SessionStore;
