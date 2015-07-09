require 'sinatra/base'

class Thermostat < Sinatra::Base

enable :sessions

set :views, proc {File.join(root,'.', 'views')}

  get '/' do
    session[:id] = @cookie
    erb :index
  end






run! if app_file == $0

end