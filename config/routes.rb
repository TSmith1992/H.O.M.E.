Rails.application.routes.draw do
  resources :migrant_shelter_reviews
  resources :migrant_shelters
  resources :migrant_lead_reviews
  resources :shelters
  resources :units, only: [:show, :index, :create, :update, :destroy]
  resources :migrants
  resources :leads

  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/me", to: 'migrants#show_me'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
