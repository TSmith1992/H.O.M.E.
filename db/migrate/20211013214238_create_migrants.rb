class CreateMigrants < ActiveRecord::Migration[6.1]
  def change
    create_table :migrants do |t|
      t.string :name
      t.date :birthdate
      t.string :gender
      t.string :origin_country
      t.boolean :unit_member
      t.boolean :unit_leader
      t.integer :unit_id
      t.text :description
      t.string :picture
      t.boolean :processed
      t.string :password_digest

      t.timestamps
    end
  end
end
