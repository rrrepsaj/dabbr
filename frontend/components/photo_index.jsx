const React = require('react');

const PhotoIndex = React.createClass({
  getInitialState() {
    return { photos: PhotoStore.all() };
  },
  render() {

  }
});
