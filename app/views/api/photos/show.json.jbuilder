# json.photo do
#   json.title @photo.title
#   json.description @photo.description
#   json.user_id @photo.user_id
#   json.photo_url @photo.photo_url
#   json.user @photo.user
# end

json.extract! @photo, :id, :title, :description, :user_id, :photo_url, :created_at, :updated_at, :user
# json.user @photo, :user
