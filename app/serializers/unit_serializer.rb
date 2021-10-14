class UnitSerializer < ActiveModel::Serializer
  attributes :id
  has_one :unit_leader
  has_one :migrant_id_A
  has_one :migrant_id_B
  has_one :migrant_id_C

  belongs_to :migrant
end
