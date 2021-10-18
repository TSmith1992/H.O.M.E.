class MigrantShelter < ApplicationRecord
  belongs_to :migrant
  belongs_to :shelter
  has_one :lead, through: :shelter

  # validates :active, uniqueness: {scope:[:migrant], message: "You cannot live in more than one shelter at a time."}
end
