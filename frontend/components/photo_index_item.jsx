const React = require('react');
const Link = require('react-router').Link;
const PhotoDetail = require('./photo_detail');
const FontAwesome = require('react-fontawesome');
const FadeModal = require('boron/FadeModal');
const hashHistory = require('react-router').hashHistory;
const swal = require('sweetalert');

// const CloudinaryUtil = require('../util/cloudinary_util');

const Moment = require('moment');

const PhotoIndexItem = React.createClass({
	// getInitialState() {
	// 	return (
	// 		{
	// 			photoUrl: CloudinaryUtil.image(this.props.photo.url, {
	// 				width: size[this.props.size],
	// 				crop: "limit",
	// 				alt: this.props.photo.title
	// 			}),
	// 			user: this.props.photo.user,
	// 			avatarUrl: this.props.photo.user.avatar_url
	// 		}
	// 	);
	// },

	redirectToShow() {
		const photoId = this.props.photo.id;
		hashHistory.push(`/photos/${photoId}`);
	},

	redirectToUserProfile() {
		const userId = this.props.photo.user.id;
		hashHistory.push(`/users/${userId}`);
	},

	redirectToAlbum() {
		const albumId = this.props.photo.album ? this.props.photo.album.id : "";
		if (this.props.photo.album) {
			hashHistory.push(`/albums/${albumId}`);
		} else {
			alert("This photo doesn't belong to an album.");
			// swal({ title: "Album <small>missing</small>!", text: "<span style='color:#F8BB86'>No album<span> matches this photo. Sorry!", html: true });
			// swal("No album matches this photo!");
		}
	},

  render () {
		let photo = this.props.photo;
		const albumRoute = this.props.photo.album ? `/albums/${this.props.photo.album.id}` : `/photos/${photo.id}`;
		const albumTitle = this.props.photo.album ? `${this.props.photo.album.title} ` : ``;

		// console.log(photo);

		return (
			<div className="card clearfix">
				<div className="photo-container">
					<div className="photo-wrapper">
						<div className="session-photo-wrapper">
							<img className="main-session-photo" photo={photo} src={photo.thumbnail_url} width="750px" />
			      </div>
						<div className="sub-photo-view">
							<span className="buddy-icon" onClick={this.redirectToUserProfile}>
								<img className="defer" src={photo.user.avatar_url} />
							</span>
							<span className="photo-details">
								<div className="name">
									<span className="username" onClick={this.redirectToUserProfile}> {photo.user.username} </span>
									<span className="activity-item-date">
										 · { Moment(photo.created_at).fromNow() }
										<span className="recommended">{/* · Recommended */}</span>
										{/*<button className="follow-button"> ♥ </button>*/}
									</span>
								</div>
								<div className="title" id={photo.id}>
									<span onClick={this.redirectToShow} title={photo.title}>{photo.title}</span>
								</div>
							</span>
							<ul className="photo-engagement">
								<li className="album-name">
									{/*<Link to={albumRoute} key={this.props.photo.id}>{albumTitle} <i className="fa fa-book"></i></Link>*/}
									<span onClick={this.redirectToAlbum}>{albumTitle} <i className="fa fa-book"></i></span>
				        </li>
			      	</ul>
		        </div>
						<span className="thin-facade" onClick={this.redirectToShow}/>
			    </div>
		    </div>
		  </div>
		)
	}
});

module.exports = PhotoIndexItem;
