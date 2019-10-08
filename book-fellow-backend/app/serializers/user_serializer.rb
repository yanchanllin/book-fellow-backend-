class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name
  attribute :books do |user|
    {
      books: user.books
    
    }
  end
  
end
