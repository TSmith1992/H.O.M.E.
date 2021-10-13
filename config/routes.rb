Rails.application.routes.draw do
  resources :migrant_shelter_reviews
  resources :migrant_shelters
  resources :migrant_lead_reviews
  resources :shelters
  resources :units
  resources :migrants
  resources :leads
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
