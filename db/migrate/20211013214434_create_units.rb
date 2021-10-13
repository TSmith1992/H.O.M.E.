class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.belongs_to :unit_leader, null: false, foreign_key: true
      t.integer :migrant_id_A
      t.integer :migrant_id_B
      t.integer :migrant_id_C

      t.timestamps
    end
  end
end
