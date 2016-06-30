const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  _handleSignout(){
    SessionActions.signOut();
  },

  greeting() {
    if (SessionStore.isUserSignedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="signout" onClick={ this._handleSignout } />
    		</hgroup>
    	);
    } else if ( !["/signin", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="signin-signup">
          <Link to="/signin" activeClassName="current">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>dabbr</h1></Link>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
