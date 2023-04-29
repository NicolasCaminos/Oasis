const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

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
    window.localStorage.setItem(checkbox.id, checkbox.checked)
})

setTheme(localStorage.getItem('theme') || preferedColorScheme);