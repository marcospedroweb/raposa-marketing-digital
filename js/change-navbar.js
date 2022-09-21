export default function initChangeNavbar() {
  // Realiza a troca de estilo da navbar

  const bannerText = document.querySelector('#banner-text');
  const headerNavBar = document.querySelector('.header');
  const brandNav = headerNavBar.querySelector('img');

  function changeNavbar() {
    const bannetTexTop = bannerText.getBoundingClientRect().top;
    // Verifica se usuario passou do texto do banner
    if (bannetTexTop < 150) {
      // Se passou muda o navbar
      headerNavBar.style.position = 'fixed';
      headerNavBar.style.backgroundColor = '#252525';
      brandNav.src = './imgs/only-brand.svg';
      brandNav.style.maxHeight = '60px';
    } else {
      // Se retornou, formata a navbar para o padrão
      headerNavBar.style.position = 'absolute';
      headerNavBar.style.backgroundColor = 'transparent';
      brandNav.src = './imgs/brand.svg';
      brandNav.style.maxHeight = '90px';
    }
  }

  window.addEventListener('scroll', changeNavbar);
}
