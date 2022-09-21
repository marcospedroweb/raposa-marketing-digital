export default function initChangeNavbar() {
  const bannerText = document.querySelector('#banner-text');
  const initialBannerTextTop = bannerText.getBoundingClientRect().top;
  const headerNavBar = document.querySelector('.header');
  const brandNav = headerNavBar.querySelector('img');

  function changeNavbar() {
    const bannetTexTop = bannerText.getBoundingClientRect().top;
    if (bannetTexTop < 150) {
      headerNavBar.style.position = 'fixed';
      headerNavBar.style.backgroundColor = '#252525';
      brandNav.src = './imgs/only-brand.svg';
      brandNav.style.maxHeight = '60px';
    } else {
      headerNavBar.style.position = 'absolute';
      headerNavBar.style.backgroundColor = 'transparent';
      brandNav.src = './imgs/brand.svg';
      brandNav.style.maxHeight = '90px';
    }
  }

  window.addEventListener('scroll', changeNavbar);
}
