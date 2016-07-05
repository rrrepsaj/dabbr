webpackHotUpdate(0,{

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Link = __webpack_require__(168).Link;
	var SessionStore = __webpack_require__(231);
	var ErrorActions = __webpack_require__(254);
	var SessionActions = __webpack_require__(256);
	// Components
	var SigninForm = __webpack_require__(258);
	var SignupForm = __webpack_require__(260);
	// Modals
	var DropModal = __webpack_require__(261);
	var OutlineModal = __webpack_require__(270);
	var ScaleModal = __webpack_require__(271);
	
	var App = React.createClass({
	  displayName: 'App',
	  showSignin: function showSignin() {
	    ErrorActions.clearErrors();
	    this.refs.signinModal.show();
	  },
	  showSignup: function showSignup() {
	    ErrorActions.clearErrors();
	    this.refs.signupModal.show();
	  },
	  _handleSignout: function _handleSignout() {
	    SessionActions.signOut();
	  },
	  greeting: function greeting() {
	    var modalStyle = {
	      "width": "600px"
	    };
	    if (SessionStore.isUserSignedIn()) {
	      return React.createElement(
	        'hgroup',
	        { className: 'header-group', __self: this
	        },
	        React.createElement(
	          'nav',
	          { className: 'signin-signup', __self: this
	          },
	          React.createElement(
	            'ul',
	            {
	              __self: this
	            },
	            React.createElement(
	              'li',
	              { onClick: this._handleSignout, __self: this
	              },
	              'Sign out'
	            )
	          )
	        )
	      );
	    } else {
	      return React.createElement(
	        'nav',
	        { className: 'signin-signup', __self: this
	        },
	        React.createElement(
	          'ul',
	          {
	            __self: this
	          },
	          React.createElement(
	            'li',
	            { onClick: this.showSignin, __self: this
	            },
	            'Sign in'
	          ),
	          React.createElement(
	            ScaleModal,
	            { ref: 'signinModal', modalStyle: modalStyle, __self: this
	            },
	            React.createElement(SigninForm, {
	              __self: this
	            })
	          ),
	          React.createElement(
	            'li',
	            { onClick: this.showSignup, __self: this
	            },
	            'Sign up'
	          ),
	          React.createElement(
	            ScaleModal,
	            { ref: 'signupModal', modalStyle: modalStyle, __self: this
	            },
	            React.createElement(SignupForm, {
	              __self: this
	            })
	          )
	        )
	      );
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      {
	        __self: this
	      },
	      React.createElement(
	        'nav',
	        { className: 'fixed-nav-bar', __self: this
	        },
	        React.createElement(
	          'header',
	          {
	            __self: this
	          },
	          React.createElement(
	            Link,
	            { to: '/photos', className: 'header-link', __self: this
	            },
	            React.createElement(
	              'h1',
	              {
	                __self: this
	              },
	              'dabbr'
	            )
	          ),
	          this.greeting()
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'main-content', __self: this
	        },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = App;

/***/ }

})
//# sourceMappingURL=0.bb590fd962745b0d4ac4.hot-update.js.map