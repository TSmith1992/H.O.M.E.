class Shelter < ApplicationRecord
  belongs_to :lead_id
  has_many :migrant_shelters
  has_many :migrant_shelter_reviews
  has_many :migrants, through :migrant_shelters

  validates :description, length:{minimum: 50}
end
