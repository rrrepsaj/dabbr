const React = require('react');
const Masonry = require('react-masonry-component');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const PhotoIndexItem = require('./photo_index_item');
const ScaleModal = require('boron/ScaleModal');

const masonryOptions = {
  isFitWidth: true,
  gutter: 10
}

const PhotoIndex = React.createClass({
  getInitialState() {
    return { photos: PhotoStore.all() };
  },

  componentDidMount() {
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchAllPhotos();
  },

  componentWillUnmount() {
    this.photoListener.remove();
  },

  _onChange() {
    this.setState({ photos: PhotoStore.all() });
  },

  render() {
    let indexItems = [];

    if (this.state.photos) {
      this.state.photos.forEach(photo => {
        let indexItem = (
          <PhotoIndexItem photo={photo} key={photo.id} size="750" />
        );
        indexItems.push(indexItem);
      });
    }

    return (
      <Masonry className="my-gallery-class" elementType='ul' options={masonryOptions}>
        {indexItems}
      </Masonry>
    );
  }
});

module.exports = PhotoIndex;
