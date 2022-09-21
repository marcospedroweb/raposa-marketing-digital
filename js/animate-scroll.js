export default function initAnimateScroll() {
  const sectionBest = document.querySelector('#section-best-company');
  if (sectionBest) {
    const halfWindow = window.innerHeight * 0.6;

    function teste() {}

    function animate() {
      const sectionTop = sectionBest.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) {
        sectionBest.classList.add('show');
      } else if (sectionBest.classList.contains('show')) {
        sectionBest.classList.remove('show');
      }
    }

    animate();

    // window.addEventListener('scroll', animate);
    window.addEventListener('scroll', animate);
  }
}
