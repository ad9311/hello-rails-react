module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @message = random_message
        render json: @message
      end

      private

      def random_message
        Message.order('RANDOM()').first
      end
    end
  end
end
