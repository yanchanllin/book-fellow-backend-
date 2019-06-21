# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


lili = User.first
# #  User.create(name:"Amy", username:"Amyl", password:"password")
#  amy = User.second
#  amy.books.create(name: "Blue", author:"Chris Lam", description:"It's good for age 4 & up")
 
 lili.books.create(name: "The Tiny Seed", author:"Eric Carle", description:"age 4 & up,Its journey is perilous, and the reader learns the fate of fellow seeds")
# #  lili.reviews.create(content:"good for beginnner reading", rating:"4/5", user_id:1,book_id:1)
# amy.reviews.create(content:"Each page is packed with intriguing facts, future places, and lots more!", rating:"4/5",user_id:1,book_id:2)