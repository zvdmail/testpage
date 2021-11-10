




//     // Показ сообщения об успешной отправке
// const showMessageSuccess = () => {
//   messageSuccess.classList.remove('visually-hidden');

//   setTimeout(() => {
//     messageSuccess.classList.add('visually-hidden');
//     }, SHOW_TIME);

// };


// // Показ сообщения об ошибке отправки
// const showMessageError = () => {
//   messageError.classList.remove('visually-hidden');

//   setTimeout(() => {
//     messageError.classList.add('visually-hidden');
//     }, SHOW_TIME);

// };


// // Код вызова для передачи адреса почты в Mindbox
// mindbox("async", {
//   operation: "LandingEmail",
//   data: {
//     customer: {
//       authenticationTicket: "Забрать тикет из урла",
//       email: "<Email>",
//       subscriptions: [
//         {
//           pointOfContact: "Email",
//           isSubscribed: "true"
//         }
//       ]
//     }
//   },
//   onSuccess: showMessageSuccess(),
//   onError: showMessageError()
// });


// // Слушатель нажатия кнопки отправки
// button.addEventListener('click', () => {
//   if ((fieldName.checkValidity() === true) & (fieldMail.checkValidity() === true) & (fieldСonditions.checkValidity() === true) ) {
//     mindbox();
//   }
// });




// const message = document.querySelector('.message');
// const messageSuccess = document.querySelector('.success');
// const messageError = document.querySelector('.error');
// const button = document.querySelector('.form__button');

// const SHOW_TIME = 10000;

// // Показ сообщения об успешной отправке
// const showMessageSuccess = (() => {
//   messageSuccess.classList.remove('visually-hidden');
// }, SHOW_TIME);


// // Показ сообщения об ошибке отправки
// const showMessageError = (() => {
//   messageError.classList.remove('visually-hidden');
// }, SHOW_TIME);


// // Код вызова для передачи адреса почты в Mindbox
// const mindbox = () => {("async", {
//   operation: "LandingEmail",
//   data: {
//     customer: {
//       authenticationTicket: "Забрать тикет из урла",
//       email: "<Email>",
//       subscriptions: [
//         {
//           pointOfContact: "Email",
//           isSubscribed: "true"
//         }
//       ]
//     }
//   },
//   onSuccess: showMessageSuccess(),
//   onError: showMessageError(),
// })};

// // Слушатель нажатия кнопки отправки
// button.addEventListener('click', function () {
//   mindbox();
// });
