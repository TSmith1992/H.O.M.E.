class MigrantSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthdate, :gender, :origin_country, :unit_member, :unit_leader, :unit_id, :description, :picture, :processed

  has_many :migrant_lead_reviews
  has_many :migrant_shelters
  has_many :migrant_lead_reviews
  has_many :shelters, through: :migrant_shelters
  has_one :unit
  
end
