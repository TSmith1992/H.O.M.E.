class MigrantLeadReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: MigrantLeadReview.all
    end

    def show
        migrantLeadReview = find_migrantLeadReview
        render json: migrantLeadReview
    end

    def create
        migrantLeadReview = MigrantLeadReview.create!(migrantLeadReview_params)
        render json: migrantLeadReview, status: :created
    end

    def update
        migrantLeadReview = find_migrantLeadReview
        migrantLeadReview.update!(migrantLeadReview_params)
        render json: migrantLeadReview, status: :ok
    end

    private

    def find_migrantLeadReview
        MigrantLeadReview.find(params[:id])
    end

    def migrantLeadReview_params
        params.permit(:migrant_id, :lead_id, :score, :review)
    end

    def render_not_found_response
        render json: {error: "MigrantLeadReview not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
