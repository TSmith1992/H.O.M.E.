class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :review_score, :description, :picture, :capacity, :avg_rating_shelter, :current_occupancy

  has_one :lead
  has_many :migrant_shelters
  has_many :migrant_shelter_reviews
  has_many :migrants, through: :migrant_shelters

  def avg_rating_shelter
    shelter = Shelter.find_by(id: self.object.id)
    if shelter.migrant_shelter_reviews.length<1
      avg_rating = 5
    else
      shelter_rating_sum = shelter.migrant_shelter_reviews.map{|review| review.score}.sum
      shelter_rating_length = shelter.migrant_shelter_reviews.map{|review| review.score}.length
      shelter_rating_sum/shelter_rating_length
    end
  end

  def current_occupancy
    shelter = Shelter.find_by(id: self.object.id)
    shelter.migrant_shelters.filter{|migrant| migrant.active?}.length 
  end


end
