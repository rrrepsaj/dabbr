const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const PhotoStore = require('../stores/photo_store');
const UserStore = require('../stores/user_store');
const PhotoActions = require('../actions/photo_actions');
const UserActions = require('../actions/user_actions');

const PhotoEditForm = React.createClass({
  getInitialState() {
    let potential = PhotoStore.find(this.props.params.photoId);
    let photo = potential ? potential: {};
    return ({
      title: photo.title,
      description: photo.description,
      url: photo.photo_url,
      album: photo.album,
      user: photo.user
    });
  },

  componentDidMount() {
    this.photoListener = PhotoStore.addListener(this.handleChange);
    PhotoActions.fetchPhoto(parseInt(this.props.params.photoId));
  },

  componentWillUnmount() {
    this.photoListener.remove();
  },

  changeTitle(e) {
    this.setState({ title: e.target.value });
  },

  changeDescription(e) {
    this.setState({ description: e.target.value });
  },

  handleChange() {
    let potential = PhotoStore.find(this.props.params.photoId);
    let photo = potential ? potential : {};
    this.setState({
      title: photo.title,
      description: photo.description,
      url: photo.photo_url
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    let id = parseInt(this.props.params.photoId);
    const photoData = {
      title: this.state.title,
      description: this.state.description,
      id: id
    };
  },

  redirectToPhoto(e) {
    let id = parseInt(this.props.params.photoId);
    hashHistory.push(`/photos/${id}`);
  },

  redirectToPhotos(e) {
    e.preventDefault();
    hashHistory.push('/photos');
  },

  render() {
    if (this.state.url) {
      let url = this.state.url;
    }

    let redirectPhoto = <a className="edit-nav" onClick={this.returnToPhoto}>BACK TO PHOTO</a>;
    let redirectHome = <a className="edit-nav" onClick={this.redirectToPhotos}>RETURN TO EXPLORE</a>;
    
    return (
      <div className="signin-form-container upload-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>Edit Photo</h1>

          <div className="clearfix">
            <div className="photo-container">
              <div className="photo-wrapper">
                <div className="session-photo-wrapper">
                  <div className="main-session-photo">
                    <img className="updated-photo" src={this.state.url} onClick={this._uploadPhoto} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="signin-form upload-fields">
            <label>
              <input type="text" value={this.state.title} onChange={this.changeTitle} required />
              <div className="label-text">Title</div>
            </label>

            <label>
              <input type="text" value={this.state.description} onChange={this.changeDescription} required />
              <div className="label-text">Description</div>
            </label>

            <div className="signin-buttons">
              <button type="submit" className="forms">Submit</button>
            </div>

          </div>
        </form>
      </div>
     );
  }
});

module.exports = PhotoEditForm;
