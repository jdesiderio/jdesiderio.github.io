// Tableau contenant les informations sur les compétences
const skills = [
  { class: "html", icon: "fa-brands fa-html5", text: "HTML5" },
  { class: "css", icon: "fa-brands fa-css3-alt", text: "CSS3" },
  { class: "sass", icon: "fa-brands fa-sass", text: "Sass" },
  { class: "javascript", icon: "fa-brands fa-square-js", text: "Javascript" },
  { class: "react", icon: "fa-brands fa-react", text: "React" },
  { class: "seo", icon: "fa-solid fa-globe", text: "SEO" }
];

const container = document.querySelector('.skillset');

// Itère sur chaque compétence pour créer les éléments HTML correspondants
skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = `${skill.class} bubble`;

  const icon = document.createElement('i');
  icon.className = `${skill.icon} fa-2xl`;
  bubbleDiv.appendChild(icon);

  const textP = document.createElement('p');
  textP.textContent = skill.text;

  skillDiv.appendChild(bubbleDiv);
  skillDiv.appendChild(textP);
  container.appendChild(skillDiv);
});
