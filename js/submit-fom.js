import initAlertUser from './alert-user.js';

export default function initSubmitForm() {
  const form = document.querySelector('#form-contact');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputName = form.querySelector('#name');
    const inputEmail = form.querySelector('#email');
    const inputTel = form.querySelector('#tel');
    const inputRadios = form.querySelectorAll('input[type="radio"]');
    const feedbacks = form.querySelectorAll('.invalid-feedback');

    if (!inputName.value && !inputEmail.value && !inputTel.value) {
      initAlertUser(
        'danger',
        'Para enviar o formulario, insirá dados válidos.',
      );
    } else if (inputName.value && inputEmail.value && inputTel.value) {
      inputName.value = '';
      inputEmail.value = '';
      inputTel.value = '';
      inputRadios.forEach((input, index) => {
        if (index !== 0) {
          input.checked = false;
        }
      });
      feedbacks.forEach((feedback) => {
        feedback.style.display = 'none';
      });
      initAlertUser('success', 'Formulario enviado com sucesso');
    }
  });
}
