# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

100.times do
  place = Place.create(
    name: Faker::Address.street_name,
    address: Faker::Address.street_address,
    city: Faker::Address.city
  )
  10.times do
    InternetSpeed.create(
      place: place,
      download_speed: (1..100).to_a.sample,
      download_units: ['kb', 'gb', 'mb'].sample
    )
  end
end
