class UnitSerializer < ActiveModel::Serializer
  attributes :id, :person_A, :person_B, :person_C
  has_one :migrant_id
  # has_one :migrant_id_A
  # has_one :migrant_id_B
  # has_one :migrant_id_C

  # belongs_to :migrant
end
