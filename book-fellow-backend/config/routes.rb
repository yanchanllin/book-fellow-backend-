Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/sessions#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  
  #i want my api be bookfellow.com/api/v1/resource
  namespace :api do 
    namespace :v1 do 
      resources :reviews
      resources :books
    resources :users
    resources :books do 
      resources :reviews
    end 
    end 
  end 
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
