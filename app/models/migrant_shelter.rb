class MigrantShelter < ApplicationRecord
  belongs_to :migrant_id
  belongs_to :shelter_id

  validates :active, uniqueness: {scope:[:migrant_id], message: "You cannot be living in more than one shelter at a time."}
end
