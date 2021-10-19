class Lead < ApplicationRecord
    has_many :shelters
    has_many :migrant_lead_reviews
    has_many :migrant_shelters, through: :shelters
    has_many :inhabitors, through: :migrant_shelters, source: :migrants
    has_many :migrant_shelter_reviews, through: :shelters
    has_secure_password

    validates :name, :description, :picture, presence: true

    def avg_rating_lead
        lead = self
        if lead.migrant_lead_reviews.length<1
          avg_rating = 5
        else
          lead_rating_sum = lead.migrant_lead_reviews.map{|review| review.score}.sum
          lead_rating_length = lead.migrant_lead_reviews.map{|review| review.score}.length
          lead_rating_sum/lead_rating_length
        end
      end
end
