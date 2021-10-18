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
        Migrant.update(id: params[:migrant_id], unit_leader: true, unit_member: true)
        Migrant.update(id: params[:person_A], unit_leader: false, unit_member: true)
        Migrant.update(id: params[:person_B], unit_leader: false, unit_member: true)
        Migrant.update(id: params[:person_C], unit_leader: false, unit_member: true)
        byebug
        render json: unit, status: :created
    end

    def update
        unit = find_unit
        unit.update!(unit_params)
        render json: unit, status: :ok
    end

    def destroy 
        unit= find_unit
        Migrant.update(id: params[:migrant_id], unit_leader:false, unit_member:false)
        Migrant.update(id: params[:person_A], unit_leader:false, unit_member:false)
        Migrant.update(id: params[:person_B], unit_leader:false, unit_member:false)
        Migrant.update(id: params[:person_C], unit_leader:false, unit_member:false)
        unit.destroy
        head :no_content
    end

    private

    def find_unit
        Unit.find(params[:id])
    end

    def unit_params
        params.permit(:migrant_id, :person_A, :person_B, :person_C)
    end

    def render_not_found_response
        render json: {error: "Unit not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
