class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :rating
  belongs_to :user
  belongs_to :book
  
end
