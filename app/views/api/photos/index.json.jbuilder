json.array! @photos do |photo|
  json.partial! 'api/photos/photo', photo: photo
  # json.id photo.id
  # json.title photo.title
  # json.description photo.description
  # json.user_id photo.user_id
  # json.album_id photo.album_id
  # json.url photo.photo_url
  # json.user(photo.user, :id, :email, :username, :first_name, :last_name, :avatar_url)
end

# json.photos @photos, partial: 'api/photos/photo', as: :photo
