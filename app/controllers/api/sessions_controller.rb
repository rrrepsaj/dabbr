class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      # flash.now[:errors] = ["Invalid email or password"]
      # @errors = ["Invalid email or password"]
      render json: { base: ["Invalid email and/or password"] }, status: 401
      # render "api/shared/errors", status: 401 # unauthorized
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render "api/users/show"
    else
      render json: { base: ["Nobody signed in"] }, status: 404
      # @errors = ["Nobody signed in"]
      # render "api/shared/errors"
    end
  end
end
