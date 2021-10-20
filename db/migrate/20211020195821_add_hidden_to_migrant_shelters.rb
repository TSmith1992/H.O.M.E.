class AddHiddenToMigrantShelters < ActiveRecord::Migration[6.1]
  def change
    add_column :migrant_shelters, :hidden, :boolean
  end
end
