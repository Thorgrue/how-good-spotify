require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  spotify_key = ENV['SPOTIFY_KEY']
  spotify_secret = ENV['SPOTIFY_SECRET']
  provider :spotify, spotify_key, spotify_secret, scope: 'user-top-read user-read-recently-played'
end
