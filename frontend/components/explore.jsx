const React = require('react');
const SessionStore = require('../stores/session_store');
const UserActions = require('../actions/user_actions');
const Splash = require('./splash');
const PhotoIndex = require('./photo_index');

const Explore = React.createClass({
  getInitialState() {
    return (
      { currentUser: SessionStore.currentUser() }
    );
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  render() {
    let feed;
    if (this.state.currentUser) {
      feed = <PhotoIndex />;
    } else {
      feed = <Splash />;
    }

    return (
      <div className="explore">
        {feed}
      </div>
    );
  }
});

module.exports = Explore;
