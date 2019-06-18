BOOK SOCIAL APP (for children's books-educational, beginner readings)
A REACT APP WITH A RAILS API BACKEND
2019-06

\*USER
name
username
password_digest

has_many :books
has_many :reviews

\*BOOK
name,author,description
has_many :reviews
has_many :users

\*REVIEW
content,rating
belongs_to :user
belongs_to :book

rails new book-fellow --api
rails g scaffold user name username password_digest

Domain ideas:
bank app
house sale
apps review

Overview
It's mostly for children's books-educational, beginner readings. User can list many books and review on them, recommend for other parents/kids. User can also read other's book suggestions.
