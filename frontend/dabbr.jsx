// window.SessionApiUtil = require("./util/session_api_util");

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/App');
const PhotoIndex = require('./components/photo_index');
const SigninForm = require('./components/signin_form');
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');



const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/signin" component={ SigninForm } />
      <Route path="/signup" component={ SignupForm } />
      <Route path="/photos/new" component={ PhotoForm } onEnter={ _ensureSignedIn }/>
      <Route path="/photos/:photoId" component={ PhotoShow } />
    </Route>
  </Router>
);

function _ensureSignedIn(nextState, replace) {
  // We don't want users to be able to visit our 'new' or 'review' routes
  // if they haven't already signed in/up. Let's redirect them!
  // `replace` is like a redirect. It replaces the current entry
  // into the history (and the hashFragment), so the Router is forced
  // to re-route.
    if (!SessionStore.isUserSignedIn()) {
      replace('/signin');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
