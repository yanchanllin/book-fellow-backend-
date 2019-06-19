class Api::V1::BooksController < ApplicationController

    def index
        if logged_in?
            @books = current_user.books    
        render json: @books
      end

end
