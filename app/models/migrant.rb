class Migrant < ApplicationRecord
    has_many :migrant_lead_reviews
    has_many :migrant_shelters, dependent: :destroy
    has_many :migrant_lead_reviews
    has_many :migrant_shelter_reviews
    has_many :shelters, through: :migrant_shelters
    has_one :unit
    has_secure_password

    validates :password, :password_confirmation, :name, :description, :birthdate, :origin_country, :picture, presence: true

end
