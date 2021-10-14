class LeadsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: Lead.all
    end

    def show
        lead = find_lead
        render json: lead
    end

    def create
        lead = Lead.create!(lead_params)
        render json: lead, status: :created
    end

    def update
        lead = find_lead
        lead.update!(lead_params)
        render json: lead, status: :ok
    end

    private

    def find_lead
        Lead.find(params[:id])
    end

    def lead_params
        params.permit(:name, :password, :password_confirmation, :picture, :description, :review)
    end

    def render_not_found_response
        render json: {error: "Lead not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
