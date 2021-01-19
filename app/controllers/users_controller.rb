class UsersController < ApplicationController
  before_action :set_stats, only: [:spotify, :stats_final]

  def spotify
    @time_begin = Time.now
    @color_array = ['text-lavander', 'text-lilac', 'text-peach', 'text-coral', 'text-apricot', 'text-pea', 'text-baby-blue']
  end

  def stats_final
  end

  def test
  end

  private

  def average_year
    average = 0
    @years.each { |year| average += year.to_i }
    average.fdiv(20).round
  end

  def set_stats
    @spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    @name = @spotify_user.display_name

    @recently_played = @spotify_user.recently_played
    @underground_recent = @recently_played.sort_by(&:popularity)

    @top_artists = @spotify_user.top_artists(limit: 10, offset: 0, time_range: 'long_term')  #=> (Artist array)
    @underground_artists = @top_artists.sort_by(&:popularity)

    @top_tracks = @spotify_user.top_tracks(limit: 20, time_range: 'long_term') #=> (Track array)
    @underground_tracks = @top_tracks.sort_by(&:popularity)

    @most_underground = @spotify_user.top_artists(limit: 50, offset: 0, time_range: 'long_term').sort_by { |artist| artist.popularity }

    @years = @top_tracks.map { |track| track.album.release_date.slice(0..3) }
    @stuck_years = average_year
    @stuck_years_artist = @top_tracks.find { |track| track.album.release_date.slice(0..3) == @stuck_years.to_s || track.album.release_date.slice(0..3) == (@stuck_years + 1).to_s || track.album.release_date.slice(0..3) == (@stuck_years - 1).to_s }.artists[0].name

    original = @most_underground.map { |artist| artist.popularity }
    @original_complex = original.select { |popularity| popularity > 80 }.count * 2
  end

end
