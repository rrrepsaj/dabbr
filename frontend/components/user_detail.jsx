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
      userProfile: UserStore.userProfile()
    }
  },

  componentDidMount() {
    this.userProfileListener = UserStore.addListener(this._onUserChange);
    this.currentUserListener = SessionStore.addListener(this._onSessionChange);
    UserActions.fetchUserProfile(parseInt(this.props.params.userId));
    // debugger
  },

  componentWillUnmount() {
    this.userProfileListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps(newProps) {
    UserActions.fetchUserProfile(parseInt(newProps.params.userId));
  },

  _onUserChange() {
    this.setState({ userProfile: UserStore.userProfile() });
  },

  _onSessionChange() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  showUserPhotos() {

  },

  showUserAlbums() {

  },

  render() {
    //
    return (
      <div>
        <div className="view fluid-photostream-coverphoto-view">
          {/*<div>
            <img src={this.state.currentUser.avatar_url} />
            <h1>{this.state.currentUser.username}</h1>
          </div>*/}
          <div className="coverphoto">
            <div className="editor-controls"></div>
            <div className="coverphoto-gradient"></div>
            <div className="coverphoto-content fluid-centered">
              <div className="cover-photo-edit"></div>
              <div className="avatar no-menu person large">
                <div className="edit">
                  <span className="edit-icon"></span>
                </div>
                <div className="loading-overlay">
                  <div className="balls"></div>
                </div>
              </div>
              <div className="title-block-content">
                <div className="title">
                  <h1 className="truncate"></h1>
                  <div className="view follow-view"></div>
                  <div className="view follow-view"></div>
                </div>
                <p className="subtitle truncate"></p>
                <p className="followers truncate"></p>
              </div>
              <div className="metadata-content">
                <p className="photo-count">3 photos</p>
                <p>Joined 2016</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view fluid-magic-subnav-view">
          <div className="fluid-subnav-shim">
            <div className="fluid-subnav">
              <div className="subnav-content fluid-centered">
                <ul className="links">
                  <li id="user-photos" class="link" onClick={this.showUserPhotos}></li>
                  <li id="user-albums" class="link" onClick={this.showUserAlbums}></li>
                </ul>
                <div className="more-link">
                  "More"
                  <span></span>
                </div>
                <div className="fader">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Insert logic here for whether to show UserPhotoIndex or UserAlbumIndex based on which li element is active*/}
      </div>
    );
  }

});

module.exports = UserDetail;
