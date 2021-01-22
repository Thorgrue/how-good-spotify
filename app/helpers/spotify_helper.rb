module SpotifyHelper
  def delete_element(array, el)
    array = array.delete(el)
  end

  def delete_tracks(top_artist)
    @top_tracks.each do |track|
      @top_tracks.delete(track) if track.album.artists[0] == top_artist
    end
  end

  def delete_recent(top_artist)
    @recently_played.each do |track|
      @recently_played.delete(track) if track.album.artists[0] == top_artist
    end
  end
end
