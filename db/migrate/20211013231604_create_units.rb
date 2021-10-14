class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.belongs_to :migrant, null: false, foreign_key: true
      t.integer :person_A
      t.integer :person_B
      t.integer :person_C

      t.timestamps
    end
  end
end
