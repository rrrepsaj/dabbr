# json.photo do
#   json.title @photo.title
#   json.description @photo.description
#   json.user_id @photo.user_id
#   json.photo_url @photo.photo_url
#   json.user @photo.user
# end

# json.extract! @photo, :id, :title, :description, :user_id, :album_id, :photo_url, :created_at, :updated_at, :user, :album

# json.user @photo, :user

# causes the nesting
json.photo @photo, partial: 'api/photos/photo', as: :photo

# json.partial! 'api/photos/photo', photo: @photo

json.user do
  json.first_name @photo.user.first_name
  json.last_name @photo.user.last_name
  json.avatar_url @photo.user.avatar_url
end
