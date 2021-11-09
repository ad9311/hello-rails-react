module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @messages = Message.all
        @message = random_message

        render json: @message
      end

      private

      def random_message
        rand_num = rand(@messages.first.id..@messages.last.id)
        @messages.where(id: rand_num)
      end
    end
  end
end
