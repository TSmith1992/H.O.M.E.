class LeadSerializer < ActiveModel::Serializer
  attributes :id, :name, :review_score, :description, :picture

  has_many :shelters
  has_many :migrant_lead_reviews
  has_many :migrant_shelters
  has_many :inhabitors, through: :migrant_shelters, source: :migrants
  has_many :migrant_shelter_reviews, through: :shelters
  
end
