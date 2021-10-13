class MigrantShelterReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :review
  has_one :migrant_id
  has_one :shelter_id
end
