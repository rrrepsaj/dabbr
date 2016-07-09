const React = require('react');
const Masonry = require('react-masonry-component');

const SessionStore = require('../stores/session_store');
const UserStore = require('../stores/user_store');

const UserActions = require('../actions/user_actions');

const PhotoIndexItem = require('./photo_index_item');
const AlbumDetail = require('./album_detail');
const UserPhotoIndex = require('./user_photo_index');
const UserAlbumIndex = require('./user_album_index');

const UserDetail = React.createClass({
  getInitialState() {
    return {
      currentUser: SessionStore.currentUser(),
      user: UserStore.userProfile()
      // userProfile: UserStore.userProfile()
    }
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._onUserChange);
    this.currentUserListener = SessionStore.addListener(this._onSessionChange);
    UserActions.fetchUserProfile(parseInt(this.props.params.userId));
  },

  componentWillUnmount() {
    this.userListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps(newProps) {
    UserActions.fetchUserProfile(parseInt(newProps.params.userId));
  },

  _onUserChange() {
    this.setState({ user: UserStore.userProfile() });
  },

  _onSessionChange() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  showUserPhotos() {

  },

  showUserAlbums() {

  },

  render() {
    let style = {
      backgroundImage: 'url(http://res.cloudinary.com/deqbn35yx/image/upload/v1467969503/mnts8v7c5ca6kvv2n3gy.jpg)'
    }
    return (
      <div className="profile-splash" style={style}>
        <div className="album-container fluid-centered">
          <div className="view album-header-view justified-transitions justified">
            <div className="album-header-content-profile">
              <div className="dimming-shim-transparent-bg"></div>
              <div className="flex-padding"></div>
              <div className="view album-title-desc-view">
                <div className="title-desc-block">
                  <div className="album-title">dabbr&trade;</div><br /><hr /><br />
                  <div className="album-description">by Jasper Chen</div>
                </div>
              </div>
              <div className="view album-stats-view justified">
                <div className="stats-container">
                  <span className="photo-counts aa-cred">App Academy / May 09, 2016 cohort</span> {/*Need number of photos in here*/}
                </div>
              </div>
              <div className="flex-padding"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserDetail;
