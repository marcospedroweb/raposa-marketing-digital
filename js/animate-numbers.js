export default function initAnimateNumbers() {
  // Realiza a animação dos numeros aumentando

  function animateNumbers() {
    const animeNumbers = document.querySelectorAll('.anime-numbers');

    animeNumbers.forEach((number) => {
      const total = +number.textContent.replace('+', '');
      // Formata um incremento personalizado
      const increment = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        // A cada 25 milesimos + numero aleatorio
        // Atualiza o numero
        start = start + increment;
        number.textContent = `+${start}`;
        if (start > total) {
          // Se passar do total, mostra apenas o total
          number.textContent = `+${total}`;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  const sectionBestCompany = document.querySelector('#section-best-company');

  function handleMutation(mutation) {
    // Verifica se a aquele elemento tem a classe
    if (mutation[0].target.classList.contains('show')) {
      // Desativa a observação do elemento
      observer.disconnect();
      animateNumbers();
    }
  }

  // Crio um observador
  const observer = new MutationObserver(handleMutation);

  // Passo como argumento qual elemento ele deve observar e atributos
  observer.observe(sectionBestCompany, { attributes: true });
}
