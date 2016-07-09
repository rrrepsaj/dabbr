# json.partial! "api/users/user", user: @user

json.user @user, partial: "api/users/user", as: :user
