class Migrant < ApplicationRecord
    has_many :migrant_lead_reviews
    has_many :migrant_shelters, dependent: :destroy
    has_many :migrant_lead_reviews
    has_many :migrant_shelter_reviews
    has_many :shelters, through: :migrant_shelters
    has_one :unit
    has_secure_password

    validates :password, :password_confirmation, :name, :description, :birthdate, :origin_country, :picture, presence: true

    def lead_info
        if self.shelters.empty?
          Lead.find(5)
        else
          lead = self.shelters[0].lead
        end
      end
    
    #   def shelter_check
    #     # byebug
    #     mig_id =self.id
    #     if self.shelters.length>1
    #       # byebug
    #       ms=self.shelters[0]
    #       ms.update(active: false)
    #       # Migrant.find_by(id: self.object.id).shelters(0)
    #       self.shelters.slice(0)
    #     else
    #       true
    #     end
    #   end
      

end
