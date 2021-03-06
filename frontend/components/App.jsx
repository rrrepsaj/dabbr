const React = require('react');
const hashHistory = require('react-router').hashHistory;
const FontAwesome = require('react-fontawesome');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorActions = require('../actions/error_actions');
const SessionActions = require('../actions/session_actions');
// Components
const PhotoForm = require('./photo_form');
const SigninForm = require('./signin_form');
const SignupForm = require('./signup_form');
// Modals
const DropModal = require('boron/DropModal');
const OutlineModal = require('boron/OutlineModal');
const ScaleModal = require('boron/ScaleModal');

const App = React.createClass({
  getInitialState() {
    return ({
      user: SessionStore.currentUser(),
      greeting: []
    });
  },

  componentWillReceiveProps() {
    this.setState({ user: SessionStore.currentUser() });
  },

  componentDidMount() {
    // SessionActions.fetchCurrentUser();
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({ user: SessionStore.currentUser() });
  },

  showSignin() {
    ErrorActions.clearErrors();
    this.refs.signinModal.show();
  },

  showSignup() {
    ErrorActions.clearErrors();
    this.refs.signupModal.show();
  },

  redirectToPhotos(e) {
    e.preventDefault();
    hashHistory.push('/photos');
  },

  redirectToUpload(e) {
    e.preventDefault();
    hashHistory.push('/upload');
  },

  _handleSignout(){
    SessionActions.signOut();
  },

  hideSigninModal() {
    this.refs.signinModal.hide();
  },

  greeting() {
    const modalStyle = {
      "width": "500px"
    };
    if (SessionStore.isUserSignedIn()) {

    	return (
    		<hgroup className="header-group">
          <nav className="signin-signup">
            <ul>
              <li><span className="greeting-text">Hello, {SessionStore.currentUser().username}!</span></li>
              <li>
                <i className="fa fa-cloud-upload fa-2x" onClick={this.redirectToUpload} aria-hidden="true"></i>
              </li>
              <li onClick={this._handleSignout}>Sign out</li>
            </ul>
          </nav>
    		</hgroup>
    	);
    } else {
      return (
        <nav className="signin-signup">
          <ul>
            <li>
              <i className="fa fa-cloud-upload fa-2x" onClick={this.showSignin} aria-hidden="true"></i>
            </li>
            <li onClick={this.showSignin}>Sign in</li>
            <ScaleModal ref="signinModal" modalStyle={modalStyle}>
              <SigninForm hide={this.hideSigninModal} redirect={this.redirectToPhotos} />
            </ScaleModal>

            <button className="signup-btn" onClick={this.showSignup}>Sign up</button>
            <ScaleModal ref="signupModal" modalStyle={modalStyle}>
              <SignupForm />
            </ScaleModal>
          </ul>
        </nav>
      );
    }
  },

  render() {
    const logoRoute = SessionStore.isUserSignedIn() ? "/photos" : "/";

    return (
      <div>
        <nav className="fixed-nav-bar">
          <header>
            <Link to={logoRoute} className="header-link"><h1>dabbr</h1></Link>
            { this.greeting() }
          </header>
        </nav>

        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
