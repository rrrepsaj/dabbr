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
const AlbumDetail = require('./components/album_detail');
const PhotoDetail = require('./components/photo_detail');
const PhotoEditForm = require('./components/photo_edit_form');
const PhotoForm = require('./components/photo_form');
const PhotoIndex = require('./components/photo_index');
const SigninForm = require('./components/signin_form');
const SignupForm = require('./components/signup_form');
const Splash = require('./components/splash');
const UserDetail = require('./components/user_detail');
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');


const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={Splash} />
      <Route path="/photos" component={PhotoIndex} />
      <Route path="/photos/:photoId" component={PhotoDetail} />
      <Route path="/photos/:photoId/edit" component={PhotoEditForm} />
      <Route path="/upload" component={PhotoForm} />
      <Route path="/users/:userId" component={UserDetail} />
      <Route path="/albums/:albumId" component={AlbumDetail} />
    </Route>
  </Router>
);

function _ensureSignedIn(nextState, replace) {
    if (!SessionStore.isUserSignedIn()) {
      replace('/');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {

    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
