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

// Buscar valor en localStorage, si no existe, poner en 'off'
let DarkMode = localStorage.getItem('dark') || 'on';
// Obtener el checkbox
let checkDark = document.getElementById('slider');
// Marcar checkbox y aplicar estilo a body si darkMode = 'on'
if (DarkMode == 'on') {
    checkDark.checked = true;
}

setTheme(localStorage.getItem('theme') || preferedColorScheme);

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
