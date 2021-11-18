const messageSuccess = document.querySelector('.success');
const messageError = document.querySelector('.error');
const button = document.querySelector('.form__button');
const fieldName = document.querySelector('.name');
var fieldMail = document.querySelector('.mail');
const fieldСonditions = document.querySelector('.conditions');
const currentLocation = window.location;


const mailValue = document.getElementById('field-mail').value;
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
const wrapperMindbox = () => {
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
  if ((fieldName.checkValidity() === true) & (fieldMail.checkValidity() === true) & (fieldСonditions.checkValidity() === true) ) {
    const formFields = new FormData(e.target);
    const fieldMail = formFields.get('mail');
    console.log("ticket: "+ticket);
    console.log("email:"+ fieldMail);
    wrapperMindbox(ticket, fieldMail);
}
});


// // Слушатель нажатия кнопки отправки
// button.addEventListener('click', () => {
//   if ((fieldName.checkValidity() === true) & (fieldMail.checkValidity() === true) & (fieldСonditions.checkValidity() === true) ) {

//     // wrapperMindbox(ticket);
//   }
// });



// button.addEventListener('click', () => {
//   if ((fieldName.checkValidity() === true) & (fieldMail.checkValidity() === true) & (fieldСonditions.checkValidity() === true)) {

//     function wrapper (ticket) {
//     mindbox("async", {
//       operation: "LandingEmail",
//       data: {
//         customer: {
//           authenticationTicket: ticket,
//           email: "mail-test-ya123@yandex.ru",
//           subscriptions: [
//             {
//               pointOfContact: "Email",
//               isSubscribed: "true"
//             }
//           ]
//         }
//       },
//       onSuccess: function () {
//         messageError.classList.remove('visually-hidden');

//         setTimeout(() => {
//           messageError.classList.add('visually-hidden');
//         }, SHOW_TIME);
//       },

//       onError: function (error) {
//         messageSuccess.classList.remove('visually-hidden');

//         setTimeout(() => {
//           messageSuccess.classList.add('visually-hidden');
//         }, SHOW_TIME);
//       }
//     });
//   }
// }
// });
