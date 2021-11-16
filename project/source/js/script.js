
const messageSuccess = document.querySelector('.success');
const messageError = document.querySelector('.error');
const button = document.querySelector('.form__button');
const fieldName = document.querySelector('.name');
const fieldMail = document.querySelector('.mail');
const fieldСonditions = document.querySelector('.conditions');
const currentLocation = window.location;
const currentHref = window.location.href;

// var formData = new FormData(document.querySelector('.form'))
// const ticket2 = currentHref.split('?ticket=')[1];
// console.log(ticket2);
// const ticket = preticket.split('?ticket=')[1];
// const ticket = currentHref.split('localhost:')[1];
// console.log(ticket);
// console.log(typeof ticket);


const ticket = currentHref.split('?ticket=')[1];
const mailValue = document.getElementById('field-mail').value;
const form = document.querySelector('.form');
const SHOW_TIME = 5000;


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
      onSuccess: showMessageSuccess(),
      onError: showMessageError (error)
    });
  }


// Слушатель-2
form.addEventListener('submit', (e) => {
  if ((fieldName.checkValidity() === true) & (fieldMail.checkValidity() === true) & (fieldСonditions.checkValidity() === true) ) {
    const formFields = new FormData(e.target);
    const fieldMail = formFields.get('mail');
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
