class UsersController < ApplicationController

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    # Now you can access user's private data, create playlists and much more

    @recently_played = spotify_user.recently_played
    @top_artists = spotify_user.top_artists(limit: 10, offset: 0, time_range: 'long_term') #=> (Artist array)
    @top_tracks = spotify_user.top_tracks(time_range: 'long_term') #=> (Track array)

    # # Use Spotify Follow features
    # spotify_user.follow(playlist)
    # spotify_user.follows?(artists)
    # spotify_user.unfollow(users)
  end

end
