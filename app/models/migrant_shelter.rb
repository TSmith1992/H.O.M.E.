class MigrantShelter < ApplicationRecord
  belongs_to :migrant
  belongs_to :shelter

  validates :active, uniqueness: {scope:[:migrant], message: "You cannot be living in more than one shelter at a time."}
end
