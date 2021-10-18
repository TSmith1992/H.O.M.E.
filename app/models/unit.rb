class Unit < ApplicationRecord
  belongs_to :migrant
  # belongs_to :person_A, :class_name => 'Migrant'
  # belongs_to :person_B, :class_name => 'Migrant'
  # belongs_to :person_C, :class_name => 'Migrant'

  validates :migrant_id, :person_A, :person_B, :person_C,  presence: true, uniqueness: true
  
  # def unit_member_update
  #   Migrant.update(
  #     id: :migrant_id,
  #     unit_leader: true,
  #     unit_member: true
  # )
  # Migrant.update(
  #     id: :person_A,
  #     unit_leader: false,
  #     unit_member: true
  # )
  # Migrant.update(
  #     id: :person_B,
  #     unit_leader: false,
  #     unit_member: true
  # )
  # Migrant.update(
  #     id: :person_C,
  #     unit_leader: false,
  #     unit_member: true
  # )
  # end


  # def same_shelter
  #   # lead_shelter = Migrant.find(:migrant_id).shelters[0].id
  #   # a_shelter = Migrant.find(:person_A).shelters[0].id
  #   # b_shelter = Migrant.find(:person_B).shelters[0].id
  #   # c_shelter = Migrant.find(:person_C).shelters[0].id
  #   unless (Migrant.find(:migrant_id).shelters[0].id==Migrant.find(:person_A).shelters[0].id) && (Migrant.find(:migrant_id).shelters[0].id==Migrant.find(:person_B).shelters[0].id) && (Migrant.find(:migrant_id).shelters[0].id== Migrant.find(:person_C).shelters[0].id)
  #     errors.add(:same_shelter, 'All members must live in the same shelter')
  #   end
  # end
end
