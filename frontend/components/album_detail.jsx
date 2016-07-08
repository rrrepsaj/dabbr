const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const Masonry = require('react-masonry-component');
const AlbumActions = require('../actions/album_actions');
const AlbumStore = require('../stores/album_store');
const PhotoIndexItem = require('./photo_index_item');
const SessionStore = require('../stores/session_store');

const AlbumDetail = React.createClass({
  getInitialState() {
    let id = parseInt(this.props.params.id);
    let album = AlbumStore.find(id);
    // 
    return {album: album};
  },

  componentDidMount() {
    // $(document).ready(() => {
    //   $('html').animate({scrollTop: 0}, 1);
    //   $('body').animate({scrollTop: 0}, 1);
    // });

    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchAlbum(parseInt(this.props.params.id));
  },

  componentWillUnmount() {
    this.albumListener.remove();
  },

  redirectToAlbums(e) {
    e.preventDefault();
    hashHistory.push('/albums');
  },

  _onChange() {
    let id = parseInt(this.props.params.id);
    let album = AlbumStore.find(id);
    this.setState({album: album});
  },

  render() {
    if (this.state.album) {
      let associatedPhotos = this.state.album.photos.map((photo, index) => {
        return <PhotoIndexItem key={index} photo={photo} />
        // return <
      });
      let coverPhotoUrl = this.state.album.cover_photo_url;
      let albumTitle = this.state.album.title;
      let albumDescription = this.state.album.description;
      let userProfilePath = `/user/${this.state.album.user_id}`;

      // 

      const masonryOptions = {
        isFitWidth: true
      };

      const style = {
        backgroundImage: 'url(' + coverPhotoUrl + ')'
      };

      // 

      return (
        <div className="album-container fluid-centered">
          <div className="view album-toolbar-view">
            <div className="album-toolbar-content">
              <div className="back-to-albums">
                <span className="back-to-albums-icon"></span>
                <span className="back-to-albums-text" onClick={this.redirectToAlbums}>&lt; Back to albums list</span>
              </div>
            </div>
          </div>

          <div className="view album-header-view justified-transitions justified">
            <div className="album-header-content" style={style}>
              <div className="dimming-shim"></div>
              <div className="flex-padding"></div>
              <div className="view album-title-desc-view">
                <div className="title-desc-block">
                  <div className="album-title">{this.state.album.title}</div>
                  <input type="text" className="meta-field edit-meta-field edit-album-title" wrap="on" />
                  <div className="album-desc description-placeholder"></div>
                  <div className="description-show-more-hidden">
                    <textarea className="metafield edit-meta-field edit-album-desc" wrap="on"></textarea>
                  </div>
                </div>
              </div>
              <div className="view album-stats-view justified">
                <div className="stats-container">
                  <span className="photo-counts">{associatedPhotos.length} photos</span> {/*Need number of photos in here*/}
                </div>
              </div>
              <div className="view album-engagement-view justified">
                <div className="view fluid-share-album-view">
                  <div className="fluid-share-button" title="Share album">
                    <span title="Share album" className="fluid-share-icon share-album-icon"></span>
                  </div>
                </div>
              </div>
              <div className="flex-padding"></div>
              <div className="view attribution-view album-attribution justified-album-details-page">
                <div className="avatar person medium"></div>
                <div className="attribution-info">
                  <Link to={userProfilePath} className="owner-name truncate" />
                </div>
              </div>
            </div>
          </div>

          <Masonry className="associated-photos"
                   elementType={'ul'}
                   options={masonryOptions}
                   disabledImagesLoaded={false}>
           {associatedPhotos}
         </Masonry>

          {/*<div className="view photo-list-view">
            <div className="view photo-list-photo-view awake">{associatedPhotos}</div>
          </div>
          <div className="view pagination-view"></div>*/}

          {/*<Masonry className="photoList" elementType={'ul'} options={masonryOptions} disableImagesLoaded={false}>{photoList}</Masonry>*/}
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
  }

});

module.exports = AlbumDetail;
