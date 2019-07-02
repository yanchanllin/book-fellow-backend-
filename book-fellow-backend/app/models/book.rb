class Book < ApplicationRecord
  has_many :reviews
  has_many :users
  
  validates :name, :user, presence: true
end
