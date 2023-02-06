class ApartmentsController < ApplicationController
  def index
    apts = Apartment.all
    render json: apts
  end
end
