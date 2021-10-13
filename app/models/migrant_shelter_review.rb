class MigrantShelterReview < ApplicationRecord
  belongs_to :migrant_id
  belongs_to :shelter_id

  validates :score, :review, :migrant_id, :shelter_id, presence: true
  validates :review, length:{minimum: 50}
end
