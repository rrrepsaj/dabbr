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
    return { photos: PhotoStore.all(), loaded: 15 };
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

	hasMore () {
		return (this.state.photos.length > this.state.loaded);
	},

	loadMore (pageNum) {
		this.setState({loaded: (10 * pageNum + 1)});
	},

  render() {
    function shuffle (array) {
      let i = 0, j = 0, temp = null;
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    let indexItems = [];

    if (this.state.photos) {
      this.state.photos.forEach(photo => {
        let indexItem = (
          <PhotoIndexItem photo={photo} key={photo.id} size="750" />
        );
        indexItems.push(indexItem);
      });
    }

    shuffle(indexItems);

    return (
      <Masonry className="my-gallery-class" elementType='ul' options={masonryOptions}>
        {indexItems}
      </Masonry>
    );
  }
});

module.exports = PhotoIndex;
