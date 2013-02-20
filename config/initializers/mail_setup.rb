ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {  
  :address              => "smtp.mrxempresarial.com.br",  
  :port                 => 587,  
  :domain               => "mrxempresarial.com.br",  
  :user_name            => "contato@mrxempresarial.com.br",  
  :password             => "mrxreal2013",  
  :authentication       => "login",  
  :enable_starttls_auto => false,
  :openssl_verify_none => true  
}

ActionMailer::Base.default_url_options[:host] = "http://www.mrxempresarial.com.br"