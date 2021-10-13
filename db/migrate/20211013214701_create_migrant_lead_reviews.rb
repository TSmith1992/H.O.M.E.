class CreateMigrantLeadReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :migrant_lead_reviews do |t|
      t.belongs_to :migrant_id, null: false, foreign_key: true
      t.belongs_to :lead_id, null: false, foreign_key: true
      t.integer :score
      t.text :review

      t.timestamps
    end
  end
end
