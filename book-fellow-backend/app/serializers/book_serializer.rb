class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :author, :description

  attribute :reviews do |book|
    book.reviews.map do |rev|
      {
        content: rev.content,
        rating: rev.rating
      }
    end
  end

  
end
