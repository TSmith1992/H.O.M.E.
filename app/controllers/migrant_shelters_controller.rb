class MigrantSheltersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: MigrantShelter.all
    end

    def show
        migrantShelter = find_migrantShelter
        render json: migrantShelter
    end

    def create
        migrantShelter = MigrantShelter.create!(migrantShelter_params)
        render json: migrantShelter, status: :created
    end

    def update
        migrantShelter = find_migrantShelter
        migrantShelter.update!(migrantShelter_params)
        render json: migrantShelter, status: :ok
    end

    private

    def find_migrantShelter
        MigrantShelter.find(params[:id])
    end

    def migrantShelter_params
        params.permit(:migrant_id, :shelter_id, :active)
    end

    def render_not_found_response
        render json: {error: "MigrantShelter not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
