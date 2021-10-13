class MigrantSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthdate, :gender, :origin_country, :unit_member, :unit_leader, :unit_id, :description, :picture, :processed
end
