module Api
  class  PlacesController < ApplicationController
    def index
      render json: Place.all, each_serializer: ::PlaceSerializer
    end
  end
end
