const React = require('react');

const UploadButton = React.createClass({
  uploadPhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          let url = images[0].url;
          this.props.storePhotoUrl(url);
        }
      }.bind(this)
    );
  },

  render() {
    return (
      <i className="fa fa-cloud-upload fa-2x" onClick={this.uploadPhoto} aria-hidden="true"></i>
    )
  }
});

module.exports = UploadButton;
