class Lead < ApplicationRecord
    has_many :shelters
    has_many :migrant_lead_reviews
    has_many :migrant_shelters, through: :shelters
    has_many :inhabitors, through: :migrant_shelters, source: :migrants
    has_many :migrant_shelter_reviews, through: :shelters
    has_secure_password

    validates :name, :description, :picture, presence: true
end
