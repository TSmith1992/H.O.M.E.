class MigrantShelterReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :review
  has_one :migrant
  has_one :shelter
end
