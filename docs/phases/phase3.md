# Phase 3: Albums and Tags (2 days)

## Rails
### Models
* Album
* Tag
* Tagging

### Controllers
* Api::AlbumsController (create, destroy, index, show, update)

### Views
* albums/index.json.jbuilder
* albums/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* AlbumsIndex
  - AlbumIndexItem
* AlbumForm
* SearchIndex

### Stores
* Album

### Actions
* ApiActions.receiveAllAlbums -> triggered by ApiUtil
* ApiActions.receiveSingleAlbum
* ApiActions.deleteAlbum
* AlbumActions.fetchAllAlbums -> triggers ApiUtil
* AlbumActions.fetchSingleAlbum
* AlbumActions.createAlbum
* AlbumActions.editAlbum
* AlbumActions.destroyAlbum

### ApiUtil
* ApiUtil.fetchAllAlbums
* ApiUtil.fetchSingleAlbum
* ApiUtil.createAlbum
* ApiUtil.editAlbum
* ApiUtil.destroyAlbum

## Gems/Libraries
