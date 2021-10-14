class MigrantShelterReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: MigrantShelterReview.all
    end

    def show
        migrantShelterReview = find_migrantShelterReview
        render json: migrantShelterReview
    end

    def create
        migrantShelterReview = MigrantShelterReview.create!(migrantShelterReview_params)
        render json: migrantShelterReview, status: :created
    end

    def update
        migrantShelterReview = find_migrantShelterReview
        migrantShelterReview.update!(migrantShelterReview_params)
        render json: migrantShelterReview, status: :ok
    end

    private

    def find_migrantShelterReview
        MigrantShelterReview.find(params[:id])
    end

    def migrantShelterReview_params
        params.permit(:migrant_id, :shelter_id, :score, :review)
    end

    def render_not_found_response
        render json: {error: "MigrantShelterReview not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
