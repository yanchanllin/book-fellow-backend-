class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name
  # has_many :books, serializer: BookSerializer

  attribute :books do |user|
    {
      books: user.books
    
    }
  end
end
