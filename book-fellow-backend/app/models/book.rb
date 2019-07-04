class Book < ApplicationRecord
  has_many :reviews
  has_one :user
  
  validates :name, presence: true
end
