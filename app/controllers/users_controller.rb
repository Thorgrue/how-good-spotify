class UsersController < ApplicationController

  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    # Now you can access user's private data, create playlists and much more

    @recently_played = spotify_user.recently_played
    @underground_recent = @recently_played.sort_by { |track| track.popularity }
    @top_artists = spotify_user.top_artists(limit: 10, offset: 0, time_range: 'long_term')  #=> (Artist array)
    @underground_artists = @top_artists.sort_by { |artist| artist.popularity }
    @top_tracks = spotify_user.top_tracks(limit: 20, time_range: 'long_term') #=> (Track array)
    @underground_tracks = @top_tracks.sort_by { |track| track.popularity }

    @most_underground = spotify_user.top_artists(limit: 50, offset: 0, time_range: 'long_term').sort_by { |artist| artist.popularity }
    # # Use Spotify Follow features
    # spotify_user.follow(playlist)
    # spotify_user.follows?(artists)
    # spotify_user.unfollow(users)
  end

end
