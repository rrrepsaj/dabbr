const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(AppDispatcher);

let _user;

UserStore.userProfile = function() {
  return _user;
};

function addUser (user) {
  _user = undefined;
  _user = user;
  UserStore.__emitChange();
}

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_USER:
      addUser(payload.user);
      break;
  }
};

module.exports = UserStore;
