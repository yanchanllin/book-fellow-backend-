class Api::V1::ReviewsController < ApplicationController

    def index

        if logged_in?
            @reviews = current_user.book.reviews    
        render json: ReviewSerializer.new(@reviews)
        else 
            render json: {
                error: "Must be logged in to see reviews"
            }
      end
    end 

    def show 
        render json: @review
    end 
        
end
