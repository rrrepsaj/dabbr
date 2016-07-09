class Api::AlbumsController < ApplicationController
  before_filter :find_album, only: [:show, :update, :destroy]
  before_action :require_signed_in!, except: [:create, :show]

  def index
    @albums = Album.includes(:photos).where(user_id: current_user.id)
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      render 'api/albums/show'
    else
      @errors = @album.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
  end

  def update
    if @album.update(album_params)
      render :show
    else
      @errors = @album.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @album.destroy
    render json: {}
  end

  private

    def find_album
      @album = Album.find(params[:id])
    end

    def album_params
      params.require(:album).permit(:title, :description, :cover_photo_url, :user_id)
    end

end
