class Shelter < ApplicationRecord
  belongs_to :lead
  has_many :migrant_shelters
  has_many :migrant_shelter_reviews
  has_many :migrants, through: :migrant_shelters

  validates :description, length:{minimum: 50}

  def avg_rating_shelter
    shelter = self
    if shelter.migrant_shelter_reviews.length<1
      avg_rating = 5
    else
      shelter_rating_sum = shelter.migrant_shelter_reviews.map{|review| review.score}.sum
      shelter_rating_length = shelter.migrant_shelter_reviews.map{|review| review.score}.length
      shelter_rating_sum/shelter_rating_length
    end
  end

  def current_occupancy
    shelter = self
    shelter.migrant_shelters.filter{|migrant| migrant.active?}.length 
  end

end
