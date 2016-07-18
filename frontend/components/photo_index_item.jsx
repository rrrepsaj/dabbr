const React = require('react');
const PhotoDetail = require('./photo_detail');
const FadeModal = require('boron/FadeModal');
const hashHistory = require('react-router').hashHistory;

const Moment = require('moment');

const PhotoIndexItem = React.createClass({
	redirectToShow() {
		const photoId = this.props.photo.id;
		hashHistory.push(`/photos/${photoId}`);
	},

	redirectToUserProfile() {
		const userId = this.props.photo.user.id;
		hashHistory.push(`/users/${userId}`);
	},

  render () {
		let photo = this.props.photo;

		// function timeSince(date) {
	  //   var seconds = Math.floor((new Date() - date) / 1000);
	  //   var interval = Math.floor(seconds / 31536000);
	  //   if (interval > 1) {
    //     return interval + " years";
	  //   }
	  //   interval = Math.floor(seconds / 2592000);
	  //   if (interval > 1) {
    //     return interval + " months";
	  //   }
	  //   interval = Math.floor(seconds / 86400);
	  //   if (interval > 1) {
    //     return interval + " days";
	  //   }
	  //   interval = Math.floor(seconds / 3600);
	  //   if (interval > 1) {
    //     return interval + " hours";
	  //   }
	  //   interval = Math.floor(seconds / 60);
	  //   if (interval > 1) {
    //     return interval + " minutes";
	  //   }
	  //   return Math.floor(seconds) + " seconds";
		// }

		return (
			<div className="card clearfix">
				<div className="photo-container">
					<div className="photo-wrapper">
						<div className="session-photo-wrapper">
							<img className="main-session-photo" photo={photo} src={photo.photo_url} width="750px" />
			      </div>
						<div className="sub-photo-view">
							<span className="buddy-icon" onClick={this.redirectToUserProfile}>
								<img className="defer" src={photo.user.avatar_url} />
							</span>
							<span className="photo-details">
								<div className="name">
									<span onClick={this.redirectToUserProfile}>{photo.user.username} </span>
									<span className="activity-item-date">
										 · { Moment(photo.created_at).fromNow() }
										{/*· {photo.created_at}*/}
										{/*· 8 months ago*/}
										<span className="recommended">{/* · Recommended */}</span>
										{/*<button className="follow-button"> ♥ </button>*/}
									</span>
								</div>
								<div className="title" id={photo.id}>
									<span onClick={this.redirectToShow} title={photo.title}>{photo.title}</span>
								</div>
							</span>
		        </div>
						<span className="thin-facade" onClick={this.redirectToShow}/>
			    </div>
		    </div>
		  </div>
		)
	}
});

module.exports = PhotoIndexItem;
