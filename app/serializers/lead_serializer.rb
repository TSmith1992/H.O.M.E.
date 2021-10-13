class LeadSerializer < ActiveModel::Serializer
  attributes :id, :name, :review_score, :description, :picture
end
