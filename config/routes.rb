Mrx::Application.routes.draw do
  root :to => 'home#index'

  get "home/index"
  post '/contato' => 'home#contact', as: :contact
end
