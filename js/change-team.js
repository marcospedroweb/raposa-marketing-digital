export default function initChangeTeam() {}

const employees = document.querySelectorAll('.employee');

async function fetchNewEmployee(image, name, position) {
  const response = await fetch('https://randomuser.me/api');
  const json = await response.json();
  const data = json.results[0];
  const employeePosition = position.textContent;

  image.src = data.picture.large;
  name.textContent = `${data.name.first} ${data.name.last}`;

  if (employeePosition.indexOf('Dona') !== -1) {
    position.textContent =
      data.name.title === 'Miss' ? position.textContent : 'Dono';
  } else if (employeePosition.indexOf('Diretora') !== -1) {
    position.textContent =
      data.name.title === 'Miss'
        ? position.textContent
        : position.textContent.replace('Diretora', 'Diretora');
  } else if (employeePosition.indexOf('Diretor') !== -1) {
    position.textContent =
      data.name.title === 'Miss'
        ? position.textContent.replace('Diretor', 'Diretora')
        : position.textContent;
  }
}

employees.forEach((employee) => {
  const image = employee.querySelector('img');
  const name = employee.querySelector('h3');
  const position = employee.querySelector('p');

  fetchNewEmployee(image, name, position);
});
