class Unit < ApplicationRecord
  belongs_to :migrant

  validates :migrant_id, :person_A, :person_B, :person_C,  presence: true
  validate :same_shelter

  def same_shelter
    # lead_shelter = Migrant.find(:migrant_id).shelters[0].id
    # a_shelter = Migrant.find(:person_A).shelters[0].id
    # b_shelter = Migrant.find(:person_B).shelters[0].id
    # c_shelter = Migrant.find(:person_C).shelters[0].id
    unless Migrant.find(:migrant_id).shelters[0].id==Migrant.find(:person_A).shelters[0].id && Migrant.find(:migrant_id).shelters[0].id==Migrant.find(:person_B).shelters[0].id && Migrant.find(:migrant_id).shelters[0].id== Migrant.find(:person_C).shelters[0].id
      errors.add(:same_shelter, 'All members must live in the same shelter')
    end
  end
end
