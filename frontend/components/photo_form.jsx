const React = require('react');
const PhotoActions = require('../actions/photo_actions');
const SessionStore = require('../stores/session_store');
const UploadButton = require('./upload_button');

const PhotoForm = React.createClass({
  getInitialState() {
    const current = SessionStore.currentUser();

    return ({
      title: "",
      description: "",
      photo_url: "",
      user_id: current.id,
      album_id: "",
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    // 
    const photoData = {
      title: this.state.title,
      description: this.state.description,
      photo_url: this.state.photo_url,
      user_id: this.state.user_id,
      album_id: this.state.album_id
    };
    PhotoActions.createPhoto(photoData);
  },

  _uploadPhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          // 
          let url = images[0].url;
          this.setState({ photo_url: url });
        }
      }.bind(this)
    );
  },

  changeTitle(e) {
    this.setState({ title: e.currentTarget.value });
  },

  changeDescription(e) {
    this.setState({ description: e.currentTarget.value });
  },

  render() {
    // check for state for default image
    let defaultAvatar = "http://res.cloudinary.com/deqbn35yx/image/upload/v1467871530/checked-background_npop0o.jpg";

    if (this.state.photo_url !== "") {
      defaultAvatar = this.state.photo_url;
    }

    return (
      <div className="signin-form-container upload-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>Upload Photo</h1>

          <div className="clearfix">
            <div className="photo-container">
              <div className="photo-wrapper">
                <div className="session-photo-wrapper">
                  <div className="main-session-photo">
                    <img className="updated-photo" src={defaultAvatar} onClick={this._uploadPhoto} />
                  </div>
                  {/*<span className="thin-facade" onClick={this._uploadPhoto} />*/}
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
    )
  }
});

module.exports = PhotoForm;
