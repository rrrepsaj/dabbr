class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true, index: true
      t.string :username, null: false, unique: true, index: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
