document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });
});

function copyEmail() {
  // Selecciona el elemento que contiene el correo electrónico
  const emailElement = document.querySelector('.hero__contact-email');
  const email = emailElement.textContent;

  navigator.clipboard.writeText(email).then(() => {
    alert('Correo electrónico copiado al portapapeles');
  }).catch(err => {
    console.error('Error al copiar el correo electrónico: ', err);
  });
}
