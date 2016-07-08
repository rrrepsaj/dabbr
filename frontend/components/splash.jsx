const React = require('react');

const Splash = React.createClass({
  render() {
    return (
      <div className="splash">
          <video className="background-video" autoPlay loop>
            <source src="http://res.cloudinary.com/deqbn35yx/video/upload/ac_none/v1467886396/VLT_Very_Large_Telescope_HD_Timelapse_Footage_z78wxh.mp4"
              type="video/mp4"/>
          </video>
      </div>
    );
  }
});

module.exports = Splash;
