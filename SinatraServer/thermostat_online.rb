require 'sinatra/base'

class Thermostat < Sinatra::Base

enable :sessions

set :views, proc {File.join(root,'.', 'views')}

  get '/' do
    if session[:temperature] 
      @temperature = session[:temperature]
      # @city = session[:cityname]
    else
      @temperature = 20
    end
    # if session[:cityname]
    #   @city = session[:cityname]
    # end
    erb :index
  end

  post '/' do
    user_temperature = params[:temperature]
    session[:temperature] = user_temperature
    
    # city_search = params[:cityname]
    # session[:temperature, :cityname] = user_temperature, city_search
    # session[:cityname] = city_search
  end





run! if app_file == $0

end