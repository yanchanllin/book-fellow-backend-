Rails.application.routes.draw do

  #i want my api be bookfellow.com/api/v1/resource
  namespace :api do 
    namespace :v1 do 
      resources :reviews
      resources :books
    resources :users
    end 
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
