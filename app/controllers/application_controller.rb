require 'sinatra/base'
require 'json'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # DELETE /reviews/:id
  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  # POST /reviews
  post '/reviews' do
    review = Review.create(
      score: params[:score],
      comment: params[:comment],
      game_id: params[:game_id],
      user_id: params[:user_id]
    )
    review.to_json
  end

  # PATCH /reviews/:id
  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      score: params[:score],
      comment: params[:comment]
    )
    review.to_json
  end

  # GET /games
  get '/games' do
    games = Game.all
    games.to_json
  end

  # GET /games/:id
  get '/games/:id' do
    game = Game.find(params[:id])
    game.to_json(include: { reviews: { include: :user } })
  end
end
