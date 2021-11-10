https://www.figma.com/file/DIhNEM5L9JQavOBCjG168J/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?node-id=0%3A1

+ сервисные окна + разместить код  интеграции с МБ


надо будет сделать один вариантов Дарим скидку (или Промокод на 5%-ую скидку - это основной ленд, 
соответственно должен быть адаптирован под десктоп + мобильная версия + версия для планшета

+ сервисные окна, они появляются в зависимости от того email система приняла и отправила промокод/email невалидный/email уже есть в базе

это как раз показано в новом варианте и старом варианте (это и есть сервисные окна или сообщения. которые появляются поверх лендинга)



ссылочка от Филиппа -
https://docs.google.com/document/d/1yXvFo79t30bBe_PrCkMwnP0yDY0a-NeQ-VITUlvb_XU/edit#heading=h.ge3olfrydql4

Вызовы Mindbox для Лендинга Hoegl
Описание Javascript SDK Javascript SDK (mindbox.ru)
Код инициализации трекера
<script>
    mindbox = window.mindbox || function() { mindbox.queue.push(arguments); };
    mindbox.queue = mindbox.queue || [];
    mindbox('create', {
        endpointId: 'Hoegl.ru'
    });
</script>
<script src="https://api.mindbox.ru/scripts/v1/tracker.js" async></script>



Код вызова для передачи адреса почты в Mindbox
mindbox("async", {
  operation: "LandingEmail",
  data: {
    customer: {
      authenticationTicket: "Забрать тикет из урла",
      email: "<Email>",
      subscriptions: [
        {
          pointOfContact: "Email",
          isSubscribed: "true"
        }
      ]
    }
  },
  onSuccess: function() { },
  onError: function(error) { }
});



<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
</script>



Если не упрощать, то email должен подходить под следующее регулярное выражение:

^([\p{L}0-9_\-!#\$%&’\*\+/=\?\^`\{}\|~])+([\.\p{L}0-9_\-!#\$%&’\*\+/=\?\^`\{}\|~])*@([\p{L}0-9]([\p{L}0-9\-]{0,61}[\p{L}0-9])?\.)*[\p{L}0-9]([\p{L}0-9\-]{0,61}[\p{L}0-9])?$

<script>
var message = document.querySelector('.message');
var messageSuccess = document.querySelector('.success');
var messageError = document.querySelector('.error');

// Код вызова для передачи адреса почты в Mindbox
mindbox("async", {
  operation: "LandingEmail",
  data: {
    customer: {
      authenticationTicket: "Забрать тикет из урла",
      email: "<Email>",
      subscriptions: [
        {
          pointOfContact: "Email",
          isSubscribed: "true"
        }
      ]
    }
  },
  onSuccess: function showMessageSuccess() {messageSuccess.classList.remove('visually-hidden');},
  onError: function showMessageError() {messageError.classList.remove('visually-hidden');}
});
</script>


webp
adaptive



action
- атрибут определяет, куда отправляются данные. Его значение должно быть действительным URL. Если этот атрибут не указан, данные будут отправлены на URL-адрес страницы, содержащей форму.


MB
тестовая ссылка - 
https://static.directcrm.ru/hoegl/index.html#



POST https://static.directcrm.ru/hoegl/index.html 405 (Method Not Allowed)
