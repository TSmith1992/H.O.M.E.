class UnitsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: Unit.all
    end

    def show
        unit = find_unit
        render json: unit
    end

    def create
        unit = Unit.create!(unit_params)
        render json: unit, status: :created
    end

    def update
        unit = find_unit
        Unit.update!(unit_params)
        render json: unit, status: :ok
    end

    def destroy 
        unit= find_unit
        unit.destroy
        head :no_content
    end

    private

    def find_unit
        Unit.find(params[:id])
    end

    def unit_params
        params.permit(:migrant_id, :person_A, :person_B, :person_C,)
    end

    def render_not_found_response
        render json: {error: "Unit not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
