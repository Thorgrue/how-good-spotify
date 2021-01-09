Rails.application.routes.draw do
  root to: 'pages#home'
  get '/auth/spotify/callback', to: 'users#spotify'
  get '/test', to: 'users#test'
end
