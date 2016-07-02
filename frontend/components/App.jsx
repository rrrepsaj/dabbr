const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorActions = require('../actions/error_actions');
const SessionActions = require('../actions/session_actions');
// Components
const SigninForm = require('./signin_form');
const SignupForm = require('./signup_form');
// Modals
const DropModal = require('boron/DropModal');
const OutlineModal = require('boron/OutlineModal');
const ScaleModal = require('boron/ScaleModal');

const App = React.createClass({
  showSignin() {
    ErrorActions.clearErrors();
    this.refs.signinModal.show();
  },

  showSignup() {
    ErrorActions.clearErrors();
    this.refs.signupModal.show();
  },

  _handleSignout(){
    SessionActions.signOut();
  },

  greeting() {
    const modalStyle = {
      "width": "500px"
    };
    if (SessionStore.isUserSignedIn()) {
    	return (
    		<hgroup className="header-group">
    			{/*<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>*/}
    			{/*<button className="header-button signin-signup" type="submit" onClick={ this._handleSignout }>Sign out</button>*/}
          <nav className="signin-signup">
            <ul>
              <li onClick={this._handleSignout}>Sign out</li>
            </ul>
          </nav>
    		</hgroup>
    	);
    } else {
      return (
        <nav className="signin-signup">
          <ul>
            <li onClick={this.showSignin}>Sign in</li>
            <ScaleModal ref="signinModal" modalStyle={modalStyle}>
              <SigninForm />
            </ScaleModal>

            <li onClick={this.showSignup}>Sign up</li>
            <ScaleModal ref="signupModal" modalStyle={modalStyle}>
              <SignupForm />
            </ScaleModal>
          </ul>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <nav className="fixed-nav-bar">
          <header>
            <Link to="/" className="header-link"><h1>dabbr</h1></Link>
            { this.greeting() }
            <div className="background-video">
              <video autoPlay loop>
                <source src=""
                  type="video/mp4"/>
              </video>
            </div>
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
