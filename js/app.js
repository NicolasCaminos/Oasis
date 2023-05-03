// Escuchar cambios en checkbox
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

// Buscar valor en localStorage, si no existe, poner en 'off'
let DarkMode = localStorage.getItem('dark') || 'off';
// Obtener el checkbox
let checkDark = document.getElementById('slider');
// Marcar checkbox y aplicar estilo a body si darkMode = 'on'
if (DarkMode == 'off') {
    slider.checked = false;
}
setTheme(localStorage.getItem('theme') || preferedColorScheme);
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
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