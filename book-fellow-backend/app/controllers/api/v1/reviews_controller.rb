class Api::V1::ReviewsController < ApplicationController

    def index

        if params[:book_id]
            @reviews = Book.find(params[:book_id]).reviews
        render json: ReviewSerializer.new(@reviews)
        else 
            render json: {
                error: "Must have a book to see reviews"
            }
        end
    end 

    def show 
    
        review_json = ReviewSerializer.new(@review).serialized_json
        render json:review_json
    end 
        
    private

      def review_params
        params.require(:review).permit(:content, :rating)
      end

  end
