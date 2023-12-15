// Sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll('nav a');

// Calcule la hauteur de l'en-tête pour ajuster le défilement
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

// Fonction pour gérer le défilement fluide vers la section ciblée
function smoothScroll(targetSection) {
  const targetOffset = targetSection.offsetTop + headerHeight;
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth',
  });
}

// Ajoute un écouteur d'événements pour chaque lien de navigation
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      smoothScroll(targetSection);
    }
  });
});

// Fonction pour vérifier si un élément est dans le viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Sélectionne la section et l'élément de décoration pour l'animation
const contactSection = document.querySelector('#contact');
const contactDeco = document.querySelector('.contact-deco');
const contactLink = document.getElementById('contact-link');
let animationTriggered = false;

// Fonction pour animer la section de contact
function animateContact() {
  contactDeco.classList.add('contact-deco-visible');
  contactDeco.style.opacity = 1;
  contactDeco.style.transform = 'translateY(0)';
  animationTriggered = true;
}

// Vérifie si la section de contact est dans le viewport pour déclencher l'animation
if (isElementInViewport(contactSection) && !animationTriggered) {
  animateContact();
}

// Ajoute un écouteur d'événements pour animer lors du défilement
window.addEventListener('scroll', () => {
  if (isElementInViewport(contactSection) && !animationTriggered) {
    animateContact();
  }
});

// Gère les clics sur le lien de contact pour animer la section
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    animateContact();
    animationTriggered = false;
  }, 2000);
});
