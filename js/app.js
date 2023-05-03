// Escuchar cambios en checkbox
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

const boton = document.getElementById('dark');
// Código para leer el modo actual al iniciar la pagina
// Si no existe en localStorage, se asigna 1 por defecto
let modo = localStorage.getItem('mode') || 1;
// Aplicar cuando se carga la página
setMode();

// Evento al hacer click en el boton y cambiar el modo
slider.addEventListener('click', function () {
    // Solo hay que cambiar el valor actual de la variable
    if (modo == 1) {
        modo = 2;
    } else {
        modo = 1;
    }
    // Aplicar cambios
});

checkbox = document.getElementById('slider')
checkbox.checked = eval(window.localStorage.getItem(checkbox.id))

checkbox.addEventListener('change', function () {
    window.localStorage.setItem(slider.id, slider.checked)
})


    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()