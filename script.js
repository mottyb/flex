document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.darkModeToggle');
    const body = document.body;
    let dark = window.localStorage.dark === 'true'
 
    console.log(typeof dark);
 
    if (dark) {
       body.classList.add('dark')
    } else {
       body.classList.remove('dark')
       console.log(body.classList);
    }
 
    darkModeToggle.innerHTML = !dark ? '<span>🌙</span>' : '<span>☀️</span>'
 
    darkModeToggle.addEventListener('click', () => {
       dark = !dark
       window.localStorage.dark = dark
       darkModeToggle.innerHTML = !dark ? '<span>🌙</span>' : '<span>☀️</span>'
       body.classList.toggle('dark');
    });
 });