class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :description
      t.string :cover_photo_url
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
