class MigrantLeadReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :review
  belongs_to :migrant
  belongs_to :lead
end
