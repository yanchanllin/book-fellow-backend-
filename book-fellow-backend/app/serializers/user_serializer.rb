class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :books
end
