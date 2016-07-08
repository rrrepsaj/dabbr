const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const PhotoActions = require('../actions/photo_actions');
const PhotoStore = require('../stores/photo_store');
const AlbumStore = require('../stores/album_store');

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
    // debugger
    PhotoActions.fetchPhoto(this.state.id);
    // debugger
  },

  componentWillUnmount() {
    this.photoListener.remove();
  },

  redirectToEdit(e) {
    e.preventDefault();
    hashHistory.push(`/photos/${this.state.id}/edit`);
  },

  _updateDetails() {
    let photo = PhotoStore.find(this.props.params.photoId);
    console.log(photo);
    debugger
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
    // debugger
    console.log(this.state.user);
    console.log(this.state.albumId);

    let albumTitle = this.state.album ? this.state.album.title : "";

    return (
      <div className="photo-detail-main">
        <div className="photo-container">
          <img className="detail-image" src={this.state.url} width="600" height="400" />
        </div>
        <div className="photo-details">
          <h1 className="photo-user">{this.state.user.username}</h1>
          <h3 className="photo-title">{this.state.title}</h3> <h4 className="photo-album">{albumTitle}</h4>
          <p onClick={this.redirectToEdit}>Edit Photo</p>
          <p className="photo-description">{this.state.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = PhotoDetail;
