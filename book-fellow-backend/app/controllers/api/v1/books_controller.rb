class Api::V1::BooksController < ApplicationController

    def index
        if logged_in?
            @books = current_user.books    
        render json: BookSerializer.new(@books)
        else 
            render json: {
                error: "Must be logged in to see trips"
            }
      end
    end 

    def show
        book_json = BookSerializer.new(@book).serialized_json
        render json:book_json
      end

    end 
