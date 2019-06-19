class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :author, :description
end
