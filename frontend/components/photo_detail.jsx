const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../actions/photo_actions');
const PhotoStore = require('../stores/photo_store');
// const cloudinary = require('cloudinary');

const PhotoDetail = React.createClass({
  getInitialState() {
    return (
      {
        id: this.props.params.id,
        title: '',
        description: '',
        userId: null,
        url: '',
        user: { username: '' },
      }
    );
  },

  componentDidMount() {
    this.photoListener = PhotoStore.addListener(this._updateDetails);
    PhotoActions.fetchPhoto(this.props.params.id);
  },

  componentWillUnmount() {
    this.photoListener.remove();
  },

  _updateDetails() {
    let photo = PhotoStore.find(this.props.params.id);
    console.log(photo);
    this.setState({
      title: photo.title,
      description: photo.description,
      userId: photo.user_id,
      url: photo.photo_url,
      user: photo.user
    })
  },

  render() {
    console.log(this.state.user);
    return (
      <div className="photo-detail-main">
        <div className="photo-container">
          <img className="detail-image" src={this.state.url} width="600" height="400" />
        </div>
        <div className="photo-details">
          <h1 className="photo-user">{this.state.user.username}</h1>
          <h3 className="photo-title">{this.state.title}</h3>
          <p className="photo-description">{this.state.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = PhotoDetail;
