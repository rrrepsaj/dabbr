# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document to trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Photo Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhotos` is set as the callback.

* `createPhoto`
  0. invoked from new photo button `onClick`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `fetchSinglePhoto`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:id` is called.
  0. `removePhoto` is set as the callback.

### Photos API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos` and emits change.

* `receiveSinglePhoto`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos[id]` and emits change.

* `removePhoto`
  0. invoked from an API callback.
  0. `Photo` store removes `_photos[id]` and emits change.

### Store Listeners

* `PhotosIndex` component listens to `Photo` store.
* `PhotoDetail` component listens to `Photo` store.


## Album Cycles

### Albums API Request Actions

* `fetchAllAlbums`
  0. invoked from `AlbumsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums` is called.
  0. `receiveAllAlbums` is set as the callback.

* `createAlbum`
  0. invoked from new album button `onClick`
  0. `POST /api/albums` is called.
  0. `receiveSingleAlbum` is set as the callback.

* `fetchSingleAlbum`
  0. invoked from `AlbumDetail` `didMount`/`willReceiveProps`
  0. `GET /api/albums/:id` is called.
  0. `receiveSingleAlbum` is set as the callback.

* `updateAlbum`
  0. invoked from `AlbumForm` `onSubmit`
  0. `POST /api/albums` is called.
  0. `receiveSingleAlbum` is set as the callback.

* `destroyAlbum`
  0. invoked from delete album button `onClick`
  0. `DELETE /api/albums/:id` is called.
  0. `removeAlbum` is set as the callback.

### Albums API Response Actions

* `receiveAllAlbums`
  0. invoked from an API callback.
  0. `Album` store updates `_albums` and emits change.

* `receiveSingleAlbum`
  0. invoked from an API callback.
  0. `Album` store updates `_albums[id]` and emits change.

* `removeAlbum`
  0. invoked from an API callback.
  0. `Album` store removes `_albums[id]` and emits change.

### Store Listeners

* `AlbumsIndex` component listens to `Album` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `PhotoSearchBar` `onChange` when there is text
  0. `GET /api/photos` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PhotoSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
