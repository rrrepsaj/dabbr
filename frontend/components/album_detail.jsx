const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

const Masonry = require('react-masonry-component');
// const layoutGeometry = require('justified-layout')([1.33, 1, 0.65]);

const AlbumActions = require('../actions/album_actions');
const AlbumStore = require('../stores/album_store');
// const PhotoIndexItem = require('./photo_index_item');
// const SessionStore = require('../stores/session_store');

const JustifiedLayout = require('react-justified-layout');

const AlbumDetail = React.createClass({
  getInitialState() {
    let id = parseInt(this.props.params.albumId);
    let album = AlbumStore.find(id); // Something wrong with AlbumStore.find
    return {album: album};
  },

  componentDidMount() {
    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchAlbum(parseInt(this.props.params.albumId));
  },

  componentWillUnmount() {
    this.albumListener.remove();
  },

  redirectToPhotos(e) {
    e.preventDefault();
    hashHistory.push('/photos');
  },

  _onChange() {
    let id = parseInt(this.props.params.albumId);
    let album = AlbumStore.find(id);
    this.setState({album: album});
  },

  render() {
    if (this.state.album) {
      let associatedPhotos = this.state.album.photos.map(photo => {
        let style = {
          backgroundImage: 'url(' + photo.photo_url + ')'
        }
        let photoPath = `/photos/${photo.id}`;
        let userPath = `/users/1`;
        return (
          <Link to={photoPath} key={photo.id}><img src={photo.thumbnail_url} /></Link>

          // TODO: figure out why this doesn't display each item
          // <div className="view photo-list-photo-view">
          //   <div className="interaction-view">
          //     <div className="photo-list-photo-interaction">
          //       <Link className="overlay" to={photoPath}><img src={photo.photo_url} key={photo.id} /></Link>
          //       <div className="interation-bar">
          //         <Link className="title" to={photoPath}>{photo.title}</Link>
          //
          //         <Link to={userPath}>by {this.state.album.user.username}</Link>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        );
      });

      let noPhotos;
      if (associatedPhotos.length === 0) {
        noPhotos = <span className="no-photos">No photos.</span>
      }

      let coverPhotoUrl = this.state.album.cover_photo_url;
      let albumTitle = this.state.album.title;
      let albumDescription = this.state.album.description;
      let userProfilePath = `/user/${this.state.album.user_id}`;

      const masonryOptions = {
        isFitWidth: true,
        gutter: 10,
        transitionDuration: 0
      };

      const style = {
        backgroundImage: 'url(' + coverPhotoUrl + ')'
      };

      return (
        <div className="album-container fluid-centered">
          <div className="view album-toolbar-view">
            <div className="album-toolbar-content">
              <div className="back-to-albums">
                <span className="back-to-albums-icon"></span>
                <span className="back-to-albums-text" onClick={this.redirectToPhotos}>&lt; Back to photos</span>
              </div>
            </div>
          </div>

          <div className="view album-header-view justified-transitions justified">
            <div className="album-header-content" style={style}>
              <div className="dimming-shim"></div>
              <div className="flex-padding"></div>
              <div className="view album-title-desc-view">
                <div className="title-desc-block">
                  <div className="album-title">{this.state.album.title}</div><br /><hr /><br />
                  <div className="album-description">{this.state.album.description}</div>
                </div>
              </div>
              <div className="view album-stats-view justified">
                <div className="stats-container">
                  <span className="photo-counts">{associatedPhotos.length} photos</span> {/*Need number of photos in here*/}
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

          <div className="album-photo-view">
           {associatedPhotos}
           {noPhotos}
          </div>

          {/*<div className="album-photo-view">
            <Masonry
              className={'my-gallery-class'}
              //style={style}
              elementType={'ul'}
              options={masonryOptions}
              diableImagesLoaded={false}
              updateOnEachImageLoad={false}>
              {associatedPhotos}
            </Masonry>
          </div>*/}

          {/*<JustifiedLayout targetRowHeight={100}>
            <div style={{ height: 100, width: 100 }}>{associatedPhotos}</div>
          </JustifiedLayout>*/}

          <div className="view pagination-view"></div>

        </div>
      );
    } else {
      // console.log(this.state.album);
      // console.log(this.props);
      return (
        <div>
          {/*<p>Loading</p>*/}
          <img className="loading" src="https://res.cloudinary.com/deqbn35yx/image/upload/c_scale,w_50/v1469675388/ripple_wlqzyy.gif" alt="Loading ripples" />
        </div>
      );
    }
  }


});

module.exports = AlbumDetail;
