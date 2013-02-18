class HomeController < ApplicationController
  def index
  end
  def contact
    @mailer = Mailer.new params[:contact]

    if @mailer.valid?
      ContactMailer.send_contact(@mailer).deliver
      render text: 'ok'
    else
      render status: 412, text: 'error'
    end
  end
end
