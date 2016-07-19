const React = require('react');
const Link = require('react-router').Link;
const PhotoDetail = require('./photo_detail');
const FontAwesome = require('react-fontawesome');
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

	redirectToAlbum() {
		const albumId = this.props.photo.album ? this.props.photo.album.id : "";
		hashHistory.push(`/albums/${albumId}`);
	},

  render () {
		let photo = this.props.photo;
		const albumRoute = this.props.photo.album ? `/albums/${this.props.photo.album.id}` : ``;

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
									<span className="username" onClick={this.redirectToUserProfile}>{photo.user.username} </span>
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
									{/*<Link to={albumRoute} ><i class="fa fa-book" onClick={this.redirectToAlbum} aria-hidden="true"></i></Link>*/}
									<Link to={albumRoute} key={this.props.photo.id}>Album</Link>
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
