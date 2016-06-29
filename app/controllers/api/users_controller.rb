class Api::UsersController < ApplicationController
  before_filter :find_user, only: [:show, :edit, :update, :destroy]
  before_action :require_current_user!, except: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      # flash.now[:errors] = @user.errors.full_messages
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @user.destroy
    redirect_to root_url
  end

  private

    def find_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :username, :first_name, :last_name, :password)
    end

end
