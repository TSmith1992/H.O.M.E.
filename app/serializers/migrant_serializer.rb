class MigrantSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthdate, :gender, :origin_country, :unit_member, :unit_leader, :unit_id, :description, :picture, :processed, :lead_info, :shelter_check

  has_many :migrant_lead_reviews
  has_many :migrant_shelters
  has_many :migrant_lead_reviews
  has_many :shelters, through: :migrant_shelters
  has_one :unit

  def lead_info
    if self.object.shelters.empty?
      Lead.find_by_id(5)
    else
      lead = self.object.shelters[0].lead_id
      Lead.find_by_id(lead)
    end
  end

  def shelter_check
    # byebug
    if Migrant.find_by(id: self.object.id).shelters.empty?
      mig_id =self.object.id
      MigrantShelter.create(
        migrant_id: mig_id,
        shelter_id: 5,
        active: true
    )
    else
      true
    end
  end
  
end
