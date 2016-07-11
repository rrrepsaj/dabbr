class Api::PhotosController < ApplicationController
  before_filter :find_photo, only: [:show, :edit, :update, :destroy]
  before_action :require_signed_in!, except: [:index, :new, :create, :show]

  def index
    @photos = Photo.all
    render 'api/photos/index'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    # if @photo
    #   render '/api/photos/show'
    # else
    #   render json: nil, status: 404
    # end
  end

  def edit
  end

  def update
    if @photo.update(photo_params)
      render :show
    else
      @errors = @photo.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @photo.destroy
    render json: {}
  end

  private

    def find_photo
      @photo = Photo.find(params[:id])
    end

    def photo_params
      params.require(:photo).permit(:title, :description, :photo_url, :user_id, :album_id)
    end

end
