class ContactMailer < ActionMailer::Base
  default from: "contato@mrxempresarial.com.br"
  add_template_helper ApplicationHelper

  EMAIL = "contato@mrxempresarial.com.br"

  def send_contact mailer
    @mailer = mailer
    mail(:to => EMAIL, :subject => "Contato via Site (#{@mailer.name})")
  end
end
