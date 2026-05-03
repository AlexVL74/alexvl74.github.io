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

    const nombre = document.getElementById('campo-nombre').value.trim();
    const email = document.getElementById('campo-email').value.trim();
    const mensaje = document.getElementById('campo-mensaje').value.trim();

    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');

    errorNombre.style.display = 'none';
    errorEmail.style.display = 'none';
    errorMensaje.style.display = 'none';

    let valido = true;

    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(!regexNombre.test(nombre) || nombre.length < 3) {
      errorNombre.textContent = 'Por favor escribe un nombre válido, solo letras.';
      errorNombre.style.display = 'block';
      valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)) {
      errorEmail.textContent = 'Por favor escribe un correo electrónico válido.';
      errorEmail.style.display = 'block';
      valido = false;
    }

    if(mensaje.length < 10) {
      errorMensaje.textContent = 'Por favor escribe un mensaje de al menos 10 caracteres.';
      errorMensaje.style.display = 'block';
      valido = false;
    }

    if(!valido) return;

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
