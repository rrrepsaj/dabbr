const React = require('react');
const PhotoDetail = require('./photo_detail');
const FadeModal = require('boron/FadeModal');
const hashHistory = require('react-router').hashHistory;

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
		const photo = this.props.photo;
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
									<span onClick={this.redirectToUserProfile}>{photo.user.username}</span>
									<span className="activity-item-date">
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
