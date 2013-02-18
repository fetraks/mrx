class Mailer
  include ActiveModel::Validations
  include ActiveModel::Conversion

  attr_accessor :name, :email, :phone, :title, :message

  validates :name, :email, :phone, :message, presence: :true

  def initialize attributes={}
    self.name = attributes[:name]
    self.email = attributes[:email]
    self.title = attributes[:title]
    self.phone = attributes[:phone]
    self.message = attributes[:message]
  end

  def persisted?
    false
  end
end
