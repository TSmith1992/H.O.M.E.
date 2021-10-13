class Unit < ApplicationRecord
  belongs_to :unit_leader, source: :migrant_id

  validates :unit_leader, :migrant_id_A, :migrant_id_B, :migrant_id_C,  presence: true
end
