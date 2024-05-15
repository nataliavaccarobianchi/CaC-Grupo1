
const menuBtn = document.getElementById("menu-boton");
const navLinks = document.getElementById("nav-links");
if (menuBtn) {
    const menuBtnicon = menuBtn.querySelector("i");
    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
    });
}
if (navLinks) {
    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnicon.setAttribute("class", "ri-menu-line");
    });
}
//Pagina de contacto --Inicio
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//validación de nombre
function validateName(name) {
    // Expresión regular que verifica que el nombre no esté vacío y que no contenga números ni caracteres especiales
    const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    return nameRegex.test(name);
}
document.addEventListener('DOMContentLoaded', function() {
    const btnSubmit = document.getElementById("submitButton");
    const formularioContacto = document.getElementById("formularioContacto")
    if (btnSubmit) {
        btnSubmit.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el envío del formulario por defecto
            
            const inputName = document.getElementById("txtNombre");
            const inputEmail = document.getElementById("txtEmail");
            const comoNosEncontraste = document.querySelector('input[name="como_nos_encontraste"]:checked');
            const comoNosEncontrasteValue = comoNosEncontraste ? comoNosEncontraste.value : null;
            const labelRadio = document.getElementsByClassName("fieldRadioValidate")[0];
            const motivoContacto = document.getElementById("motivo_contacto").value;
            const labelSelect = document.getElementsByClassName("fieldSelectValidate")[0];
            
            const validEmail = isValidEmail(inputEmail.value);
            const isValidName = validateName(inputName.value);

            if (!isValidName) {
                inputName.classList.add('errorName');
                Toastify({
                    text: "El campo nombre no admite ni números ni caracteres especiales",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#fd0d0da8",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            } else {
                inputName.classList.remove('errorName');
            }

            if (!validEmail) {
                inputEmail.classList.add('error');
                Toastify({
                    text: "Ingrese un correo electrónico válido",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#fd0d0da8",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            } else {
                inputEmail.classList.remove('error');
            }

            if (!comoNosEncontrasteValue) {
                Toastify({
                    text: "Por favor, complete el campo",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#fd0d0da8",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                labelRadio.style.display = "block";
            } else {
                labelRadio.style.display = "none";
            }

            if (!motivoContacto) {
                Toastify({
                    text: "Por favor, complete el campo",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#fd0d0da8",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                labelSelect.style.display = "block";
            } else {
                labelSelect.style.display = "none";
            }
               // Verificar si todos los campos son válidos
               if (isValidName && validEmail && comoNosEncontrasteValue && motivoContacto) {
                Toastify({
                    text: "Mensaje enviado correctamente",
                    duration: 4000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#00800096",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                  formularioContacto.reset();
            }
        });
    }
});
//Pagina de contacto --Fin
