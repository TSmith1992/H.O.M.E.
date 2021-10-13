# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "...Seeding Migrants"

600.times do
    Migrant.create(
        name: Faker::Name.name ,
        password:"123", 
        birthdate: Faker::Date.between(from: '1960-01-01', to: '2021-10-01'),
        gender: Faker::Gender.binary_type,
        origin_country: Faker::Address.country.exclude("United States of America"),
        unit_leader: false,
        unit_member: false,
        unit_id: null,
        description: Faker::Quote.most_interesting_man_in_the_world,
        picture: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg",
        shelter: true,
        processed: false
    )
end

puts "... DONE Seeding Migrants"

###=======###

puts "...Seeding Leads"

4.times do 
    Lead.create(
        name: Faker::Name.name ,
        password:"123",
        description: Faker::Quote.most_interesting_man_in_the_world,
        picture: "https://cdn.mos.cms.futurecdn.net/sAtmV58zgo6mQ3RqfxBTrd.jpg",
        review_score: 3   
    )
end

puts "... DONE Seeding Leads"

###=======###

puts "...Seeding Shelters"

10.times do
    Shelter.create(
        lead_id: rand(1..4),
        address: Faker::Address.street_address,
        state: ["AZ", "CA", "TX", "NM"].sample,
        review_score: rand(1..5),
        description: Faker::Quote.yoda,
        picture: "https://static.wixstatic.com/media/da8ae0_ff6eac56d9924bf3844a531db2b9767a.jpg/v1/fill/w_454,h_292,al_c,lg_1,q_80,usm_2.00_1.00_0.00/da8ae0_ff6eac56d9924bf3844a531db2b9767a.webp",
        capacity: rand(60..120)
    )
end
puts "... DONE Seeding Shelters"

###=======###

puts "...Seeding Units"
puts "... DONE Seeding Units"

###=======###

puts "...Seeding MigrantLeadReviews"

400.times do
    MigrantLeadReview.create(
        migrant_id: rand(1..600),
        lead_id: rand(1..4),
        score: rand(1..5),
        review: Faker::TvShows::BojackHorseman.quote
    )
end
puts "... DONE Seeding MigrantLeadReviews"

###=======###

puts "...Seeding MigrantShelter"

600.times do
    MigrantShelter.create(
        migrant_id: rand(1..600),
        shelter_id: rand(1..10),
        active: true
    )
end

puts "... DONE Seeding MigrantShelter"

###=======###

puts "...Seeding MigrantShelterReview"

300.times do
    MigrantShelterReview.create(
        migrant_id: rand(1..600),
        shelter_id: rand(1..10),
        score: rand(1..5),
        review: Faker::TvShows::BojackHorseman.quote
    )
end

puts "... DONE Seeding MigrantShelterReview"