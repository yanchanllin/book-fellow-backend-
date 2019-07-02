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

    def create
        @book = Book.new(book_params)
        current_user.books << @book
        @book.save
        flash[:notice] = 'Book was successfully created.'
        render json:@books
    end

    private
    def book_params
      params.require(:book).permit(
          :name,
          :author,
          :description,
          :user_id
        )
    end
    
 end 
