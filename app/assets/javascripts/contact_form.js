$(document).ready(function(){
  new ContactForm( $('#contato form') );
});

var ContactForm = function(obj){
  var that        = this;
  this.form       = $(obj);
  this.bnt        = this.form.find("input:submit:first");
  this.modal_dom  = this.form.parents('#contato:first').find('.modal:first');


  this.startup = function(){
    if(this.form[0]){
      this.bnt.on('click', this.submitForm);
    }
  },

  this.openModalWithMessage = function(title, message, error){
    this.toggleBnt();
    this.set_modal(title, message, error);
    this.modal_dom.fadeIn();
  },

  this.submitForm = function(event){
    event.preventDefault();
    that.modal_dom.fadeOut(100);

    $.ajax({
      url:      this.form.action,
      data:     $('#contato form').serialize(),
      dataType: 'html',
      type:     'post',

      error: function(data, textStatus, errorThrown){
        that.openModalWithMessage("Sua mensagem não pode ser enviada!", "Verifique se todos os campos foram preenchidos.", true);
      },

      success: function(data, statusText, xhr, $form){
        that.openModalWithMessage("Sua mensagem foi enviada com sucesso!", "Em breve entraremos em contato. Obrigado!", false);
        that.form.resetForm();
      }
    });
  },

  this.toggleBnt = function(){
    this.bnt.attr('value','Enviar');
    this.bnt.removeAttr('disabled');
  },

  this.set_modal = function(title, text, error){
    if (error) {
      this.modal_dom.removeClass('success').addClass('error');
    }else {
      this.modal_dom.removeClass('error').addClass('success');
    }

    this.modal_dom.find('h2').text(title);
    this.modal_dom.find('h3').text(text);
  }

  this.startup();
}
