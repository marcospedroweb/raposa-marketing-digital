export default function initAlertUser(color, msg) {
  const alertColors = ['alert-danger', 'alert-success', 'alert-warning'];
  const alertForm = document.querySelector('#alert-form');

  function removeAlertColor() {
    alertColors.forEach((element) => alertForm.classList.remove(element));
  }

  if (alertForm && color && msg) {
    const alertSpan = alertForm.querySelector('span');

    removeAlertColor();
    alertForm.classList.add(`alert-${color}`);

    alertSpan.textContent = msg;

    alertForm.classList.toggle('d-none');
    setTimeout(() => {
      alertForm.classList.toggle('show');
    }, 200);

    setTimeout(() => {
      alertForm.classList.toggle('show');
      setTimeout(() => {
        alertForm.classList.toggle('d-none');
      }, 400);
    }, 5000);
  }
}
