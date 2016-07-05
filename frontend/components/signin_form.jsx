const React = require('react');
const Link = require('react-router').Link;
// Actions
const ErrorActions = require('../actions/error_actions');
const SessionActions = require('../actions/session_actions');
// Stores
const ErrorStore = require('../stores/error_store');
const SessionStore = require('../stores/session_store');

const hashHistory = require('react-router').hashHistory;

const SigninForm = React.createClass({
  getInitialState() {
    return {
      email: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfSignedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfSignedIn() {
    if (SessionStore.isUserSignedIn()) {
      hashHistory.push("/photos");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    SessionActions.signIn(formData);
    ErrorActions.clearErrors();
    this.redirectIfSignedIn();
  },

  _demoSubmit() {
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    SessionActions.signIn(formData);
    ErrorActions.clearErrors();
    this.redirectIfSignedIn();
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this);

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  _demoLogin() {
    this.setState({
      email: "",
      password: ""
    });
    ErrorActions.clearErrors();
    let email = "demo@example.com";
    let emailIndex = 0;
    let password = "password";
    let passwordIndex = 0;
    let interval = setInterval(() => {
      if (emailIndex < 16) {
        this.setState({ email: `${this.state.email}` + email[emailIndex]});
        emailIndex++;
      } else if (passwordIndex < 8) {
        this.setState({ password: `${this.state.password}` + password[passwordIndex]});
        passwordIndex++;
      } else {
        this._demoSubmit();
        clearInterval(interval);
      }
    }, 75);
  },

  render() {
    return (
			<div className="signin-form-container">
				<form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>Sign In</h1>

          {/*Display errors*/}
          <div className="errors">
            <ul>
              {
                ErrorStore.errors().map(error => {
                  return <li className="form-errors" key={error}>{error}</li>
                })
              }
            </ul>
          </div>

					<div className="signin-form">
						<label>
							<input type="text"
		            value={this.state.email}
		            onChange={this.update("email")}
								className="signin-input" required />
              <div className="label-text">Email</div>
						</label>

						<label>
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="signin-input" required />
              <div className="label-text">Password</div>
						</label>

						<button type="submit" className="signin-signup forms">Sign in</button>
						<button type="submit" className="demo-signin forms" onClick={this._demoLogin}>Demo</button>
					</div>
				</form>
			</div>
		);
  }
});

module.exports = SigninForm;
