class Unit < ApplicationRecord
  belongs_to :migrant_id

  validates :migrant_id, :person_A, :person_B, :person_C,  presence: true
end
