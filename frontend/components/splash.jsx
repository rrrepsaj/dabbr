const React = require('react');
const SignupForm = require('./signup_form');
const DropModal = require('boron/DropModal');
const ErrorActions = require('../actions/error_actions');

const Splash = React.createClass({
  render() {
    const modalStyle = {
      width: '35%',
      top: '55%'
    };
    return (
      <div>
        <div className="splash">
            <video className="background-video" autoPlay loop>
              <source src="http://res.cloudinary.com/deqbn35yx/video/upload/ac_none/v1467886396/VLT_Very_Large_Telescope_HD_Timelapse_Footage_z78wxh.mp4"
                type="video/mp4"/>
            </video>
        </div>
        <div className="landing">
          <div className="center-panel">
            <div className="center-text-box">
              <h1>A picture is worth a thousand words.</h1>
              <h6>Share yours here</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
