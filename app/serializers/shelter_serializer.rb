class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :review_score, :description, :picture, :capacity, :avg_rating_shelter, :current_occupancy

  has_one :lead
  has_many :migrant_shelters
  has_many :migrant_shelter_reviews
  has_many :migrants, through: :migrant_shelters



end
