# Dabbr

[Heroku link](https://dabbr.herokuapp.com)

## Features & Implementation

dabbr is a web application inspired by Flickr that will be built using Ruby on Rails and React.js. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. All JavaScript is written in ES6 syntax.

![Landing Page](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232266/Screenshot_2016-07-11_03.16.41_zipj0k.png)

Users are able to sign in or sign up

![Sign In Form](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232621/Screenshot_2016-07-11_03.20.34_tlsrfn.png)

## Photo Rendering

Once signed in, users are brought to the `PhotoIndex` component, which renders all the photos so users can explore.

![PhotoIndex](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232627/Screenshot_2016-07-11_03.20.43_t7qcf2.png)

Each `PhotoIndexItem` brings users to the individual view pages of each photo

![PhotoIndexItem](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232629/Screenshot_2016-07-11_03.20.57_lxxjcx.png)

## Photo Uploading & Editing

Signed-in users also are able to upload their own photos using the Cloudinary API

![PhotoForm](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232617/Screenshot_2016-07-11_03.21.25_j7enag.png)

Another feature available to users is photo editing through the `PhotoEditForm` component

![PhotoEditForm](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232623/Screenshot_2016-07-11_03.21.19_c9ksf8.png)

## Albums

Photos also can belong to `Album`s

![Album](http://res.cloudinary.com/deqbn35yx/image/upload/v1468232628/Screenshot_2016-07-11_03.21.06_bbc0m6.png)


## Future Directions for the project

North
East
South
West
