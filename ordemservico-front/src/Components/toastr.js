import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  export function showMessage(title, message, typeMessage){
    toastr[typeMessage](message, title);
  }

  export function messageError(message){
    showMessage('Error', message, 'error');
  }

  export function messageSuccess(message){
    showMessage('Sucesso', message, 'success');
  }

  export function messageWarning(message){
    showMessage('Alerta', message, 'warning');
  }