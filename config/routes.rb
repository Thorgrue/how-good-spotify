Rails.application.routes.draw do
  root to: 'pages#home'
  get '/auth/spotify/callback', to: 'users#spotify'
  get '/test', to: 'users#test'
  get '/stats_final', to: 'users#stats_final'
end
