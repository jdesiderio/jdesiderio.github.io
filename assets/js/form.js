const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Adresse e-mail invalide";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const nameInput = document.getElementById("name");
const firstnameInput = document.getElementById("firstname");
const messageInput = document.getElementById("message");
const formError = document.getElementById("form-error");

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const firstname = firstnameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || firstname === "" || email === "" || message === "") {
    formError.textContent = "Veuillez remplir tous les champs.";
    formError.style.display = "block";
  } else {
    formError.style.display = "none";
    // Créer le corps de l'email
    const emailBody = `Nom: ${name}%0D%0APrénom: ${firstname}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Ouvrir le client de messagerie
    window.location.href = `mailto:janyce@mjv.desi?subject=Sujet de l'email&body=${emailBody}`;
  }
});
