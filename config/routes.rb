Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :show, :destroy]
    resources :photos
    resources :albums, only: [:create, :show, :update, :destroy]
  end
end
