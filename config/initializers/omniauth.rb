require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  spotify_key = ENV['SPOTIFY_KEY']
  spotify_secret = ENV['SPOTIFY_SECRET']
  provider :spotify, spotify_key, spotify_secret, scope: 'user-top-read user-read-recently-played user-read-private'
  # provider :spotify, Rails.application.credentials.spotify[:client_id], Rails.application.credentials.spotify[:client_secret], scope: %w(
  #   user-top-read
  #   user-read-recently-played
  # ).join(' ')
end
