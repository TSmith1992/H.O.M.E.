class MigrantShelterSerializer < ActiveModel::Serializer
  attributes :id, :active
  has_one :migrant_id
  has_one :shelter_id
end
