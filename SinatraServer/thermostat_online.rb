require 'sinatra/base'

class Thermostat < Sinatra::base

enable :sessions

set :views, proc {File.join(root,'.', 'views')}

get '/' do
  erb :index
end