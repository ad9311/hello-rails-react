Rails.application.routes.draw do
  resources :messages, only: [:index]
  root "messages#index"

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
