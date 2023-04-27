class ApartmentsController < ApplicationController
  def index
    apts = Apartment.all
    render json: apts
  end
  
  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: 422
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
  end
end
