class User < ApplicationRecord
    has_secure_password 
    has_many :books
    has_many :reviews
    validates :name, :username, presence: true
    validates :username, uniqueness: true
    
end
