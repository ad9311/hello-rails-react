class StaticController < ApplicationController
  def index
    @message = Message.last
  end
end
