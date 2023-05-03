const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    sessionStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = sessionStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

checkbox = document.getElementById('slider')
checkbox.checked = eval(window.localStorage.getItem(checkbox.id))

checkbox.addEventListener('change', function () {
    window.sessionStorage.setItem(checkbox.id, checkbox.checked)
})

setTheme(localStorage.getItem('theme') || preferedColorScheme);
if ($event === window.onclose) {
    localStorage.clear();
}

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