import initAlertUser from './alert-user.js';

export default function initSubmitForm() {}

const form = document.querySelector('#form-contact');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputName = form.querySelector('#name').value;
  const inputEmail = form.querySelector('#email').value;
  const inputTel = form.querySelector('#tel').value;

  if (!inputName && !inputEmail && !inputTel) {
    initAlertUser('danger', 'Para enviar o formulario, insirá dados válidos.');
  } else {
    initSubmitForm('success', 'Formulario enviado com sucesso');
  }

  console.log('teste');
});
