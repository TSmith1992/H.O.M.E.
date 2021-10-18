class MigrantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show_me
        user =  Migrant.find_by(name: session[:user_name]) || Lead.find_by(name: session[:user_name])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end
    
    def index
        render json: Migrant.all
    end

    def show
        migrant = find_migrant
        render json: migrant
    end

    def create
        migrant = Migrant.create!(migrant_params)
        MigrantShelter.create(
            migrant_id: migrant.id,
            shelter_id: 5,
            active: true
        )
        render json: migrant, status: :created
    end

    def update
        migrant = find_migrant
        migrant.update!(migrant_params)
        render json: migrant, status: :ok
    end

    private

    def find_migrant
        Migrant.find(params[:id])
    end

    def migrant_params
        params.permit(:name, :password, :password_confirmation, :shelter_check, :picture, :gender, :description, :origin_country, :unit_member, :unit_leader, :processed, :birthdate, :lead_info)
    end

    def render_not_found_response
        render json: {error: "Migrant not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
