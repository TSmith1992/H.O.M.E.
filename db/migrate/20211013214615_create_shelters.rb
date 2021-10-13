class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.belongs_to :lead_id, null: false, foreign_key: true
      t.string :name
      t.string :address
      t.string :state
      t.integer :review_score
      t.text :description
      t.string :picture
      t.integer :capacity

      t.timestamps
    end
  end
end
