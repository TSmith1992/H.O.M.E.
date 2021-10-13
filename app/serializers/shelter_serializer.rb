class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :review_score, :description, :picture, :capacity
  has_one :lead_id
end
