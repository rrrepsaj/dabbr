const React = require('react');

const UserPhotoIndex = React.createClass({

  render() {
    return (
      <div className="photolist-container fluid-centered">
        <div className="photolist-empty hidden">
          <h4>You have no photos</h4>
          <a class="butt medium" href="/photos/upload"></a>
        </div>
        <div className="view photo-list-view photostream">
          <div className="view photo-list-photo-view photostream awake">
            {/* insert user photo index items here */}
          </div>
        </div>
        <div className="view pagination-view photostream"></div>
      </div>
    );
  }
});

module.exports = UserPhotoIndex;
