const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const PhotoActions = require('../actions/photo_actions');
const PhotoStore = require('../stores/photo_store');
const AlbumStore = require('../stores/album_store');

// const CloudinaryUtil = require('../util/cloudinary_util');

const PhotoDetail = React.createClass({
  getInitialState() {
    return (
      {
        id: this.props.params.photoId,
        title: '',
        description: '',
        userId: null,
        albumId: null,
        url: '',
        user: { username: '' },
        album: { title: '' }
      }
    );
  },

  componentDidMount() {
    this.photoListener = PhotoStore.addListener(this._updateDetails);
    PhotoActions.fetchPhoto(this.state.id);
  },

  componentWillUnmount() {
    this.photoListener.remove();
  },

  redirectToEdit(e) {
    e.preventDefault();
    hashHistory.push(`/photos/${this.state.id}/edit`);
  },

  redirectToAlbum(e) {
    e.preventDefault();
    hashHistory.push(`/albums/${this.state.albumId}`);
  },

  _updateDetails() {
    let photo = PhotoStore.find(this.props.params.photoId);
    this.setState({
      title: photo.title,
      description: photo.description,
      userId: photo.user_id,
      albumId: photo.album_id,
      url: photo.photo_url,
      user: photo.user,
      album: photo.album
    })
  },

  render() {
    let albumTitle = this.state.album ? this.state.album.title : "";
    let userProfile = `/users/${this.state.userId}`;

    return (
      <div className="photo-detail-main">
        <div className="photo-container">
          <img className="detail-image" src={this.state.url} />
        </div>
        <div className="photo-details-widget">
          <ul className="photo-details-list">
            <li><h1 className="photo-title">{this.state.title}</h1><span onClick={this.redirectToAlbum} className="photo-album">{albumTitle}</span></li>
            <li><h3 className="photo-user"><span className="by">by</span> <Link className="photo-user" to={userProfile}>{this.state.user.username}</Link></h3></li>
            <hr />
            <li><p className="photo-description">{this.state.description}</p></li>

            <li><p className="photo-edit" onClick={this.redirectToEdit}>Edit Photo</p></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PhotoDetail;
