class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.references :user, null: false, index: true, foreign_key: true
      t.string :title
      t.text :description
      t.string :photo_url, null: false

      t.timestamps null: false
    end
  end
end
