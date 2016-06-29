Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:index, :create]
    resources :users
    resource :session, only: [:new, :create, :destroy]
  end
end
