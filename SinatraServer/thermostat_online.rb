require 'sinatra/base'

class Thermostat < Sinatra::Base

enable :sessions

set :views, proc {File.join(root,'.', 'views')}

  get '/' do
    if session[:temperature]
      @temperature = session[:temperature]
    else
      @temperature = 20
    end
    erb :index
  end

  post '/' do
    user_temperature = params[:temperature]
    session[:temperature] = user_temperature
  end





run! if app_file == $0

end