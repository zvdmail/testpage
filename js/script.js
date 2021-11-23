const messageSuccess = document.querySelector('.success');
const messageError = document.querySelector('.error');

const form = document.querySelector('.form');
const SHOW_TIME = 5000;

var arr1 = document.location.href.split('?');
var ticket = '';
if (typeof arr1[1] != 'undefined') {
  arr2 = (arr1[1]).split('&');
  for (var i in arr2) {
    var get_param = (arr2[i]).split('=');
    if (get_param[0] == 'direct-crm-ticket') ticket = get_param[1];
  }
}

// Показ сообщения об успешной отправке
const showMessageSuccess = () => {
  messageSuccess.classList.remove('visually-hidden');

  setTimeout(() => {
    messageSuccess.classList.add('visually-hidden');
    }, SHOW_TIME);
};


// Показ сообщения об ошибке отправки
const showMessageError = () => {
  
  messageError.classList.remove('visually-hidden');

  setTimeout(() => {
    messageError.classList.add('visually-hidden');
    }, SHOW_TIME);
};


// Код вызова для передачи адреса почты в Mindbox
const wrapperMindbox = (ticket,fieldMail) => {
    
    mindbox("async", {
      operation: "LandingEmail",
      data: {
        customer: {
          authenticationTicket: ticket,
          email: fieldMail,
          subscriptions: [
            {
              pointOfContact: "Email",
              isSubscribed: "true"
            }
          ]
        }
      },
      onSuccess: function(response) {
        console.log("In success function");
        console.log(response);
        showMessageSuccess();
      },
      onError: function(error){
        console.log("In error function");
        console.log(error);
        showMessageError();
      }
    });
  }


// Слушатель-2
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form_submitted');
  if ((e.target.querySelector('.name').checkValidity() === true) &&
    (e.target.querySelector('.mail').checkValidity() === true) &&
    (e.target.querySelector('.conditions').checkValidity() === true) ) {
    var formFields = new FormData(e.target);
    var fieldMail = formFields.get('mail');
    console.log("ticket: "+ticket);
    console.log("email:"+ fieldMail);
    mindbox("async", {
      operation: "LandingEmail",
      data: {
        customer: {
          authenticationTicket: ticket,
          email: fieldMail,
          subscriptions: [
            {
              pointOfContact: "Email",
              isSubscribed: "true"
            }
          ]
        }
      },
      onSuccess: function(response) {
        console.log("In success function");
        console.log(response);
        showMessageSuccess();
      },
      onError: function(error){
        console.log("In error function");
        console.log(error);
        showMessageError();
      }
    });
}
});
