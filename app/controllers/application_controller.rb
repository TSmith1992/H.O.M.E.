class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    private
  
    def authorize
      current_user = Migrant.find_by(id: session[:id]) || Lead.find_by(id: session[:id])
      render json: {errors: ["Not Authorized"]} , status: :unauthorized unless current_user
    end
    
    def render_unprocessable_entity_response(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
end
