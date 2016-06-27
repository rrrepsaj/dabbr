# Phase 2: Flux Architecture and Photo CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem
* PhotoForm

### Stores
* Photo

### Actions
* ApiActions.receiveAllPhotos -> triggered by ApiUtil
* ApiActions.receiveSinglePhoto
* ApiActions.deletePhoto
* PhotoActions.fetchAllPhotos -> triggers ApiUtil
* PhotoActions.fetchSinglePhoto 
* PhotoActions.createPhoto
* PhotoActions.editPhoto 
* PhotoActions.destroyPhoto

### ApiUtil
* ApiUtil.fetchAllPhotos
* ApiUtil.fetchSinglePhoto
* ApiUtil.createPhoto
* ApiUtil.editPhoto
* ApiUtil.destroyPhoto

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
