json.array! @photos do |photo|
  json.id photo.id
  json.title photo.title
  json.description photo.description
  json.user_id photo.user_id
  json.url photo.photo_url
  json.user(photo.user, :id, :email, :username, :first_name, :last_name, :avatar_url)
end
