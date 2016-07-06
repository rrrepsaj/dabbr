const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

function setErrors(payload) {
  // console.log(payload);
  _errors = payload.errors.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

function clearErrors() {
  _errors = [];
  _form = "";
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return [];
  }

  return _errors;
};

ErrorStore.form = function() {
  return _form;
};

ErrorStore.errors = function () {
  return _errors;
}

ErrorStore.clear = function() {
  clearErrors();
}

module.exports = ErrorStore;
