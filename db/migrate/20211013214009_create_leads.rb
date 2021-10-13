class CreateLeads < ActiveRecord::Migration[6.1]
  def change
    create_table :leads do |t|
      t.string :name
      t.integer :review_score
      t.text :description
      t.string :picture
      t.string :password_digest

      t.timestamps
    end
  end
end
