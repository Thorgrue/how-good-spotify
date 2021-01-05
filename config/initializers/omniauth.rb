require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "dc244f4173ab48bbbff42e71d617c618", "4e40c9fc06f1484caee2405a42d62ea9", scope: 'user-top-read user-read-recently-played'
end
