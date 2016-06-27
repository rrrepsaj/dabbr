## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * UserPhotosIndex
    * CameraRollIndex
      * PhotoForm
    * AlbumsIndex
      * AlbumIndexItem
      * AlbumForm
  * **PhotosIndex**
    * PhotoForm
    * PhotoIndexItem
    * **PhotoDetail**
      * PhotoTags
      * PhotoComments
  * SearchIndex
    * SearchForm
    * SearchIndexItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `PhotosIndex` **path:** index
    * **component:** `PhotoIndexItem` **path:** `/photos`
      * **component:** `PhotoDetail` **path:** `photos/:photoId`
  * **component:** `UserPhotosIndex` **path:** `/users/:userId`
    * **component:** `CameraRollIndex` **path:** `/users/:userId/cameraRoll`
    * **component:** `AlbumsIndex` **path:** `/users/:userId/albums`
  * **component:** `SearchIndex` **path:** `/search`

For Routes that have no `albumId`, `PhotosIndex` will render all
photos.
