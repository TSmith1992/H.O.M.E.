class CreateMigrantShelterReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :migrant_shelter_reviews do |t|
      t.belongs_to :migrant_id, null: false, foreign_key: true
      t.belongs_to :shelter_id, null: false, foreign_key: true
      t.integer :score
      t.text :review

      t.timestamps
    end
  end
end
