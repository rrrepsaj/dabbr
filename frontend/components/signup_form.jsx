const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
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
    if (this.props.location.pathname === "/signin") {

      SessionActions.signIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    let navLink;
    if (this.formType() === "signin") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/signin">sign in instead</Link>;
    }
    return (
			<div className="signup-form-container">
				<form onSubmit={this.handleSubmit} className="signup-form-box">
	        Welcome to dabbr!
					<br/>
					Please { this.formType() } or { navLink }

          { this.fieldErrors("base") }
					<div className="signup-form">
		        <br />
						<label> First Name:
            { this.fieldErrors("first_name") }
							<input type="text"
		            value={this.state.first_name}
		            onChange={this.update("first_name")}
								className="signup-input" />
						</label>

		        <br />
						<label> Last Name:
            { this.fieldErrors("last_name") }
							<input type="text"
		            value={this.state.last_name}
		            onChange={this.update("last_name")}
								className="signup-input" />
						</label>

		        <br />
						<label> Email:
            { this.fieldErrors("email") }
							<input type="text"
		            value={this.state.email}
		            onChange={this.update("email")}
								className="signup-input" />
						</label>

		        <br />
						<label> Username:
            { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="signup-input" />
						</label>

		        <br />
						<label> Password:
              { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="signup-input" />
						</label>

		        <br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
  }
});

module.exports = SignupForm;
