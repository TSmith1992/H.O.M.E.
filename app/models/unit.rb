class Unit < ApplicationRecord
  belongs_to :migrant

  validates :migrant, :person_A, :person_B, :person_C,  presence: true
end
