document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const cambiarContenidoBtn = document.getElementById("cambiarContenido");
  const contenidoDinamico = document.getElementById("contenidoDinamico");

  formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío si hay errores

      let nombre = document.getElementById("nombre");
      let email = document.getElementById("email");
      let mensaje = document.getElementById("mensaje");
      let error = false;

      limpiarErrores();

      if (nombre.value.trim() === "") {
          mostrarError(nombre, "El nombre es obligatorio");
          error = true;
      }

      if (!validarEmail(email.value)) {
          mostrarError(email, "Introduce un email válido");
          error = true;
      }

      if (mensaje.value.trim() === "") {
          mostrarError(mensaje, "El mensaje no puede estar vacío");
          error = true;
      }

      if (!error) {
        formulario.submit(); // Envia el formulario y redirige a procesar.php
    }
    
  });

  function mostrarError(input, mensaje) {
      let errorMensaje = document.createElement("p");
      errorMensaje.className = "error mostrar"; // Añadimos la clase para animación
      errorMensaje.textContent = mensaje;

      input.insertAdjacentElement("afterend", errorMensaje);
      input.classList.add("input-error");
  }

  function limpiarErrores() {
      document.querySelectorAll(".error").forEach((error) => {
          error.classList.remove("mostrar");
          setTimeout(() => error.remove(), 300); // Eliminamos después de la animación
      });

      document.querySelectorAll(".input-error").forEach((input) =>
          input.classList.remove("input-error")
      );
  }

  function validarEmail(email) {
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  function mostrarMensajeExito(mensaje) {
      let mensajeExito = document.createElement("p");
      mensajeExito.className = "exito mostrar";
      mensajeExito.textContent = mensaje;

      formulario.appendChild(mensajeExito);

      setTimeout(() => {
          mensajeExito.classList.remove("mostrar");
          setTimeout(() => mensajeExito.remove(), 500);
      }, 3000);
  }

  // Interactividad: Cambio de contenido dinámico
  cambiarContenidoBtn.addEventListener("click", function () {
      contenidoDinamico.innerHTML = "<p>¡¡Lo tienes todo para unirte!!</p>";
  });
});
