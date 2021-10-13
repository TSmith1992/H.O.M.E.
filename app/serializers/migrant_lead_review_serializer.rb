class MigrantLeadReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :review
  has_one :migrant_id
  has_one :lead_id
end
