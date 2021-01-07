require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "CLIENT_ID", "CLIENT_SECRET", scope: 'user-top-read user-read-recently-played'
end
