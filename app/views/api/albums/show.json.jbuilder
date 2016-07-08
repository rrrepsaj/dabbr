json.album @album, partial: 'api/albums/album', as: :album
json.photos @album.photos, partial: 'api/photos/photo', as: :photo
json.user @album.user, partial: 'api/users/user', as: :user
