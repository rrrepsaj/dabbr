const React = require('react');
const PhotoDetail = require('./photo_detail');
const FadeModal = require('boron/FadeModal');
const hashHistory = require('react-router').hashHistory;
// const cloudinary = require('cloudinary');

const PhotoIndexItem = React.createClass({
  getInitialState() {
		return (
			{
				photoUrl: this.props.photo.url
			}
		);
  },

  showDetails () {
		this.refs.detailsModal.show();
	},

	redirectToShow() {
		const photoId = this.props.photo.id;
		hashHistory.push(`/photos/${photoId}`);
	},

  render () {
		const photo = this.props.photo;

		return (
			<div className="card clearfix">
				<div className="photo-container">
					<div className="photo-wrapper">
						<div className="session-photo-wrapper">
							<img className="main-session-photo" photo={photo} onClick={this.redirectToShow} src={photo.url} width="750px" />
			      </div>
						<div className="sub-photo-view">
							<a className="buddy-icon" href="#">
								<img className="defer" src={photo.user.avatar_url} />
							</a>
							<span className="photo-details">
								<div className="name">
									<a href="#">{photo.user.username}</a>
									<span className="activity-item-date">
										{/*· {photo.created_at}*/}
										· 8 months ago
										<span className="recommended"> · Recommended </span>
										<button className="follow-button">♥</button>
									</span>
								</div>
								<div className="title" id={photo.id}>
									<span onClick={this.redirectToShow} title={photo.title}>{photo.title}</span>
								</div>
							</span>
		        </div>
						<span className="thin-facade" />
			    </div>
		    </div>
		  </div>
		)
	}
});

module.exports = PhotoIndexItem;
