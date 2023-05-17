
// Escuchar el tema preferido del cliente en su sistema
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
// Obtener el checkbox
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || preferedColorScheme);

//JS Boostrap
document.addEventListener('DOMContentLoaded', () => {
    // Buscar valor en localStorage, si no existe, poner en 'off'
    let darkMode = localStorage.getItem('dark') || 'on';
    // Obtener el checkbox
    let checkDark = document.getElementById('slider');
    // Marcar checkbox y aplicar estilo a body si darkMode = 'on'
    if (darkMode == 'on') {
        slider.checked = true;
    }
    // Escuchar cambios en checkbox
    checkDark.addEventListener('change', e => {
        // Cambiar estilo 
        setTheme(localStorage.getItem('theme') || preferedColorScheme);
        // Actualizar variable de acuerdo a estado del checkbox
        darkMode = (checkDark.checked) ? 'on' : 'off';
        // Guardar variable en localStorage
        localStorage.setItem('dark', darkMode);
    })
})


checkDark.addEventListener('change', function () {
    window.localStorage.setItem(slider.id, slider.checked)
})

    //JS Boostrap
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
//Animation
function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');
    loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();
function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section'); loaderSection.classList.add('loaded');
}