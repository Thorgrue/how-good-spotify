class AddSpotifyDataToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :spotify_data, :jsonb
  end
end
