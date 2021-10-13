class Migrant < ApplicationRecord
    has_many :migrant_lead_reviews
    has_many :migrant_shelters
    has_many :migrant_lead_reviews
    has_many :shelters, through: :migrant_shelters
    has_one :unit
    has_secure_password

    validates :name, :description, :birthdate, :origin_country, :picture, presence: true

end
