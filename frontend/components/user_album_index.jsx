const React = require('react');

const UserAlbumIndex = React.createClass({

  render() {
    return (
      <div>
        <div className="view album-list-toolbar-view fluid-centered">
          <div className="album-toolbar-content">
            <a class="create-album" href="/albums/new">
              <i></i>
              <span>Create new album</span>
            </a>
          </div>
        </div>
        <div className="albums-list-container fluid-centered">
          <div className="view photo-list-view">
            {/* list each album in this section */}
            <div className="view photo-list-album-view awake">
              {/* should link to album id */}
              <a className="interaction-view avatar photo-list-album album ginormous" href="#">
                <div className="photo-list-album-interaction dark has-actions">
                  {/* should also link to album id */}
                  <a className="overlay" href="#"></a>
                  <div className="interaction-bar">
                    <div className="metadata">
                      <h4 class="album-title"></h4>
                      <span class="album-photo-count secondary"></span>
                    </div>
                    <div className="actions">
                      <a className="share cta" title="Share this album">
                        <span></span>
                      </a>
                      <a className="download cta" title="Download">
                        <span></span>
                      </a>
                      <a className="trash cta" title="Delete this album">
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserAlbumIndex;
