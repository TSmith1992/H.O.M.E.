# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "...Seeding Migrants"

# 250.times do
#     Migrant.create(
#         name: Faker::Name.name,
#         password:"123", 
#         birthdate: Faker::Date.between(from: '1960-01-01', to: '2021-10-01'),
#         gender: Faker::Gender.binary_type,
#         origin_country: Faker::Address.country,
#         password_confirmation: "123",
#         unit_leader: false,
#         unit_member: false,
#         unit_id: nil,
#         description: Faker::Quote.most_interesting_man_in_the_world,
#         picture: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg",
#         processed: false
#     )
# end

# puts "... DONE Seeding Migrants"
# # byebug

# # # ###=======###

# puts "...Seeding Leads"

# 4.times do 
#     Lead.create(
#         name: Faker::Name.name,
#         password:"123",
#         description: Faker::Quote.most_interesting_man_in_the_world,
#         picture: "https://cdn.mos.cms.futurecdn.net/sAtmV58zgo6mQ3RqfxBTrd.jpg",
#         review_score: 3   
#     )
# end

# puts "... DONE Seeding Leads"

# ##=======###

# puts "...Seeding Shelters"

# 10.times do
#     Shelter.create(
#         lead_id: rand(1..4),
#         address: Faker::Address.street_address,
#         state: ["AZ", "CA", "TX", "NM"].sample,
#         name:Faker::Movies::VForVendetta.character,
#         review_score: rand(1..5),
#         description: Faker::Quote.yoda,
#         picture: "https://static.wixstatic.com/media/da8ae0_ff6eac56d9924bf3844a531db2b9767a.jpg/v1/fill/w_454,h_292,al_c,lg_1,q_80,usm_2.00_1.00_0.00/da8ae0_ff6eac56d9924bf3844a531db2b9767a.webp",
#         capacity: rand(60..120)
#     )
# end

# puts "... DONE Seeding Shelters"

# ###=======###

# puts "...Seeding Units"
# puts "... DONE Seeding Units"

# # ###=======###

# puts "...Seeding MigrantLeadReviews"

# 30.times do
#     MigrantLeadReview.create(
#         migrant_id: rand(1..200),
#         lead_id: rand(1..4),
#         score: rand(1..5),
#         review: Faker::TvShows::BojackHorseman.quote
#     )
# end
# puts "... DONE Seeding MigrantLeadReviews"

# # ###=======###

# puts "...Seeding MigrantShelter"

# 100.times do
#     MigrantShelter.create(
#         migrant_id: rand(1..200),
#         shelter_id: rand(1..10),
#         active: true
#     )
# end

# puts "... DONE Seeding MigrantShelter"

# # ###=======###

# puts "...Seeding MigrantShelterReview"

# 40.times do
#     MigrantShelterReview.create(
#         migrant_id: rand(1..200),
#         shelter_id: rand(1..10),
#         score: rand(1..5),
#         review: Faker::TvShows::BojackHorseman.quote
#     )
# end

# puts "... DONE Seeding MigrantShelterReview"



# puts "...Updating Migrant Photos..."

# 250.times do
#     Migrant.update(
#         picture: mpics.sample
#     )
# end
# puts "...DONE Updating Migrant Photos..."

# puts "...Updating Lead Photos..."

# 4.times do
#     Lead.update(
#         picture: 'https://media.istockphoto.com/vectors/cute-eagle-cartoon-vector-id627038452?k=20&m=627038452&s=170667a&w=0&h=Raa7sgxE6qno4MJVJkjd1fZD6LjijqlC6oXSk_VAOUM='
#     )
# end
# puts "...DONE Updating Lead Photos..."

# puts "...Updating Shelter Photos..."

# 5.times do
#     Shelter.update(
#         picture: 'http://sims4updates.net/wp-content/uploads/2019/06/1682-670x377.jpg'
#     )
# end
# puts "...DONE Updating Shelter Photos..."

# puts "...Seeding MigrantLeadReviews"

30.times do
    MigrantLeadReview.update(
        review: Faker::Quote.jack_handey
    )
end
puts "... DONE Seeding MigrantLeadReviews"

puts "...Seeding MigrantShelterReview"

40.times do
    MigrantShelterReview.update(
        review: Faker::Quote.jack_handey
    )
end

puts "... DONE Seeding MigrantShelterReview"