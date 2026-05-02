const frases = [
  "Diseño Profesional y Moderno...",
  "Páginas Web para tu Negocio...",
  "Presencia Digital que Impacta...",
  "Sitios Web que atraen mas Clientes..."
];

let i = 0;
let j = 0;
let texto = "";
let escribiendo = true;

function escribir() {
  if (escribiendo) {
    if (j < frases[i].length) {
      texto += frases[i][j];
      j++;
    } else {
      escribiendo = false;
      setTimeout(escribir, 1500);
      return;
    }
  } else {
    if (j > 0) {
      texto = frases[i].substring(0, j - 1);
      j--;
    } else {
      escribiendo = true;
      i = (i + 1) % frases.length;
    }
  }
  const el = document.querySelector(".texto-animado");
  if(el) el.textContent = texto;
  setTimeout(escribir, 80);
}

window.onload = function() {
  escribir();
};

document.querySelector(".formulario").addEventListener("submit", function(e) {
  setTimeout(() => {
    this.reset();
  }, 100);
});