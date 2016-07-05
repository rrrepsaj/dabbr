class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render "api/photos/index"
  end

  def create
    @photo = Photo.create!(photo_params)
    render :show
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      # @photo_hash = @photo.to_hash
      # @photo_hash[:user] = @photo.user.to_hash
      # render json: @photo_hash
      render '/api/photos/show'
    else
      render json: nil, status: 404
    end
  end

  def update
  end

  def destroy
  end

  private

    def photo_params
      params.require(:photo).permit(:title, :description, :photo_url)
    end

end
