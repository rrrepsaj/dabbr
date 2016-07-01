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
      username: "",
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
      hashHistory.push("/");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    SessionActions.signIn(formData);
    ErrorActions.clearErrors();
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
		            value={this.state.username}
		            onChange={this.update("username")}
								className="signin-input" required />
              <div className="label-text">Username</div>
						</label>

						<label>
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="signin-input" required />
              <div className="label-text">Password</div>
						</label>

						<button type="submit" className="signin-signup-links">Sign in</button>
					</div>
				</form>
			</div>
		);
  }
});

module.exports = SigninForm;
