class MigrantLeadReview < ApplicationRecord
  belongs_to :migrant_id
  belongs_to :lead_id

  validates :score, :review, :migrant_id, :lead_id, presence: true
  validates :review, length:{minimum: 50}
end
