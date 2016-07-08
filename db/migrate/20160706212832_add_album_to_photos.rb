class AddAlbumToPhotos < ActiveRecord::Migration
  def change
    add_reference :photos, :album, index: true, foreign_key: true
  end
end
