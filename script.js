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
const form = document.getElementById('miFormulario');
if(form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nombre = form.querySelector('[name="nombre"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const mensaje = form.querySelector('[name="mensaje"]').value.trim();

    // Validar nombre solo letras y espacios
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(!regexNombre.test(nombre) || nombre.length < 3) {
      alert('Por favor escribe un nombre válido, solo letras.');
      return;
    }

    // Validar correo
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)) {
      alert('Por favor escribe un correo electrónico válido.');
      return;
    }

    // Validar mensaje
    if(mensaje.length < 10) {
      alert('Por favor escribe un mensaje de al menos 10 caracteres.');
      return;
    }

    const data = new FormData(form);
    await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    form.reset();
    form.style.display = 'none';
    document.getElementById('mensaje-exito').style.display = 'block';
  });
}
