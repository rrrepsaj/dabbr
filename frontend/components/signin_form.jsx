const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
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
    if (this.props.location.pathname === "/signin") {
      SessionActions.signIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
    ErrorActions.clearErrors();
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
			<div className="signin-form-container">
				<form onSubmit={this.handleSubmit} className="signin-form-box">
	        Welcome to dabbr!
					<br/>
					Please { this.formType() } or { navLink }

          { this.fieldErrors("base") }
					<div className="signin-form">
		        <br />
						<label> Username:
            { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="signin-input" />
						</label>

		        <br />
						<label> Password:
              { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="signin-input" />
						</label>

		        <br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
  }
});

module.exports = SigninForm;
