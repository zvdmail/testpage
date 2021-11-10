var message = document.querySelector('.message');
var messageSuccess = document.querySelector('.success');
var messageError = document.querySelector('.error');
var messageButtonSuccess = document.querySelector('.success--js');
var messageButtonError = document.querySelector('.error--js');

messageButtonSuccess.addEventListener('click', function () {
  if (messageSuccess.classList.contains('success')) {
    messageSuccess.classList.add('visually-hidden');
  } else {}
});

messageButtonError.addEventListener('click', function () {
  if (messageError.classList.contains('error')) {
    messageError.classList.add('visually-hidden');
  } else {}
});
