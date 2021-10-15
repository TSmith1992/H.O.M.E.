class MigrantShelterSerializer < ActiveModel::Serializer
  attributes :id, :active
  has_one :migrant
  has_one :shelter


end
