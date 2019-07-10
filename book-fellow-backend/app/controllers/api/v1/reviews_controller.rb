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
        
    def create
        @review = Review.new(review_params)
     
        if @review.save
            render json: ReviewSerializer.new(@reviews), status: :created
          else
            error_resp = {
              error: @review.errors.full_messages.to_sentence
            }
            render json: error_resp, status: :unprocessable_entity
          end
        end
   

     def update
        if @review.update(review_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

    def destroy
      @review.destroy
    end


    private

      def set_review
        @review = Review.find(params[:id])
      end

      def review_params
        params.require(:review).permit(:content, :rating, :user_id, :book_id)
      end

  end
