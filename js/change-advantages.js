export default function initChangeAdvantages() {
  // Faz todo o sistema de troca de vantagens funcionar

  const slidesLink = document.querySelectorAll('.slide-link');
  const divAdvantages = document.querySelectorAll('.div-advantage');

  function removeAllActive() {
    // Remove o ativo dos links
    slidesLink.forEach((link) => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
    });

    //Verifica qual div tem active e remove e some com a mesma
    divAdvantages.forEach((divAdvantage) => {
      if (divAdvantage.classList.contains('show')) {
        divAdvantage.classList.add('hide');
        setTimeout(() => {
          if (!divAdvantage.classList.contains('d-none')) {
            divAdvantage.classList.add('d-none');
          }
          if (divAdvantage.classList.contains('show')) {
            divAdvantage.classList.remove('show');
          }
          if (divAdvantage.classList.contains('hide')) {
            divAdvantage.classList.remove('hide');
          }
        }, 300);
      }
    });
  }

  slidesLink.forEach((link) => {
    link.addEventListener('click', ({ target }) => {
      // Pegando o alvo do click
      const dataTarget = target.dataset.showTarget.trim();
      const divTarget = document.querySelector(`#advantage-${dataTarget}`);

      removeAllActive();
      // Verifica se não tem active
      if (!target.classList.contains('active')) {
        // Coloca active na classe
        target.classList.add('active');
      }

      // Verifica se o elemento está somido, se estiver, mostra o mesmo
      if (divTarget.classList.contains('d-none')) {
        divTarget.classList.remove('d-none');
        setTimeout(() => {
          if (!divTarget.classList.contains('show'))
            divTarget.classList.add('show');
        }, 300);
      }
    });
  });
}
