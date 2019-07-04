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
        render json: @book
      end

    def create
    @book = Book.new(book_params)

    if @book.save
      render json: BookSerializer.new(@books), status: :created
    else
      error_resp = {
        error: @book.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

     
    def update
        if @book.update(book_params)
          render json: @book
        else
          render json: @book.errors, status: :unprocessable_entity
        end
      end

    private

    def set_book
      @book = Book.find(params[:id])
    end

    def book_params
      params.require(:book).permit(
          :name,
          :author,
          :description,
          :user_id
        )
    end
    
 end 
