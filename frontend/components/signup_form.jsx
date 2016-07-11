const React = require('react');
const Link = require('react-router').Link;
// Actions
const ErrorActions = require('../actions/error_actions');
const SessionActions = require('../actions/session_actions');
// Stores
const ErrorStore = require('../stores/error_store');
const SessionStore = require('../stores/session_store');

const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({
  getInitialState() {
    return {
      first_name: "",
      last_name: "",
      email: "",
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    SessionActions.signUp(formData);
    ErrorActions.clearErrors();
  },

  update(property) {
    return (e) => this.setState({[property]: e.currentTarget.value});
  },

  render() {
    return (
			<div className="signup-form-container">
				<form onSubmit={this.handleSubmit} className="signup-form-box">

          <h1>Sign Up</h1>

          {/*Display errors*/}
          <div className="errors">
            <ul className="errors">
              {
                ErrorStore.errors().map(error => {
                  return <li className="form-errors" key={error}>{error}</li>
                })
              }
            </ul>
          </div>

					<div className="signup-form">
						<label>
							<input type="text"
		            value={this.state.first_name}
		            onChange={this.update("first_name")}
								className="signup-input" required/>
              <div className="label-text">First Name</div>
						</label>

						<label>
							<input type="text"
		            value={this.state.last_name}
		            onChange={this.update("last_name")}
								className="signup-input" required/>
              <div className="label-text">Last Name</div>
						</label>

						<label>
							<input type="text"
		            value={this.state.email}
		            onChange={this.update("email")}
								className="signup-input" required/>
              <div className="label-text">Email</div>
						</label>

						<label>
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="signup-input" required/>
              <div className="label-text">Username</div>
						</label>

						<label>
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="signup-input" required/>
              <div className="label-text">Password</div>
						</label>

						<div className="signup-buttons">
              <button type="submit" className="signin-signup forms">Sign up</button>
            </div>
					</div>
				</form>
			</div>
		);
  }
});

module.exports = SignupForm;
