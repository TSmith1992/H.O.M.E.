class SheltersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: Shelter.all
    end

    def show
        shelter = find_shelter
        render json: shelter
    end

    def create
        shelter = Shelter.create!(shelter_params)
        render json: shelter, status: :created
    end

    def update
        shelter = find_shelter
        shelter.update!(shelter_params)
        render json: shelter, status: :ok
    end

    private

    def find_shelter
        Shelter.find(params[:id])
    end

    def shelter_params
        params.permit(:name, :review_score, :picture, :description)
    end

    def render_not_found_response
        render json: {error: "Shelter not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
