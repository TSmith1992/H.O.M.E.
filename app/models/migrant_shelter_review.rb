class MigrantShelterReview < ApplicationRecord
  belongs_to :migrant
  belongs_to :shelter

  validates :score, :review, :migrant_id, :shelter, presence: true
  validates :review, length:{minimum: 50}
end
