class CreateMigrants < ActiveRecord::Migration[6.1]
  def change
    create_table :migrants do |t|
      t.string :name
      t.date :birthdate
      t.string :gender
      t.string :origin_country
      t.boolean :unit_member, optional: true
      t.boolean :unit_leader, optional: true
      t.integer :unit_id, optional: true
      t.text :description
      t.string :picture
      t.boolean :processed
      t.string :password_digest

      t.timestamps
    end
  end
end
