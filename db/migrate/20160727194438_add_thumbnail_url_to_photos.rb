class AddThumbnailUrlToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :thumbnail_url, :string
  end
end
