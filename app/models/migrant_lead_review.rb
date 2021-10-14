class MigrantLeadReview < ApplicationRecord
  belongs_to :migrant
  belongs_to :lead

  validates :score, :review, :migrant, :lead, presence: true
  validates :review, length:{minimum: 50}
end
