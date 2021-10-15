class LeadSerializer < ActiveModel::Serializer
  attributes :id, :name, :review_score, :description, :picture, :avg_rating_lead 

  has_many :shelters
  has_many :migrant_lead_reviews
  # has_many :migrant_shelters
  # has_many :inhabitors, through: :migrant_shelters, source: :migrants
  has_many :migrant_shelter_reviews, through: :shelters
  
  def avg_rating_lead
    # byebug
    lead_review = Lead.find_by(name: self.object.name)
    if lead_review.migrant_lead_reviews.length<1
      avg_rating = 5
    else
      lead_rating = lead_review.migrant_lead_reviews.map{|review| review.score}.sum
      lead_rating_length = lead_review.migrant_lead_reviews.map{|review| review.score}.length
      lead_rating/lead_rating_length
    end
  end
end
