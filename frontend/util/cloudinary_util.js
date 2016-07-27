const Cloudinary = require('cloudinary');
const React = require('react');
const CloudinaryImage = Cloudinary.CloudinaryImage;

Cloudinary.config({
	cloud_name: 'deqbn35yx',
	api_key: '583778127126689',
	api_secret: 'fMUKHMbJM7b2XHZpQNDHyIL450s'
});

const imgOptions = {
	transformation: [{
		width: 200,
		height: 200,
		cop: 'fill'
	}]
};

const CloudinaryUtil = {
	openUploadWidget (setUrl) {
		cloudinary.openUploadWidget({
			cloud_name: "deqbn35yx", upload_preset: "psicc0op", multiple: false },
			(error, result) => {
				setUrl(result[0]);
			}
		);
	},
	image (photoName, options) {
		return (
			Cloudinary.url(photoName, options)
		);
	}
}

module.exports = CloudinaryUtil;
