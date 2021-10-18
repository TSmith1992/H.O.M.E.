class MigrantShelterSerializer < ActiveModel::Serializer
  attributes :id, :active, :migrant, :shelter
  has_one :migrant
  has_one :shelter
  has_one :lead


end
