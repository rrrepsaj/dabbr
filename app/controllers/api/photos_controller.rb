class Api::PhotosController < ApplicationController
  def index
    photos = Photo.all
    render json: photos
  end

  def create
    @photo = Photo.create!(photo_params)
    render :show
  end

  private

    def photo_params
      params.require(:photo).permit(:title, :description, :photo_url)
    end

end
