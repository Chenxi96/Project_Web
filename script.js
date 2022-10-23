const dark = document.getElementById('dark-mode');
const darkMode = document.body;
const navDark = document.getElementById('nav-bar');
const navDark2 = document.getElementById('change');
const navDark3 = document.getElementById('change2');
const navDark4 = document.getElementById('change3');
const darkMain = document.getElementById('about-me');


function turnDark(event) {
    dark.innerHTML = 'Normal Mode';
    darkMode.style.backgroundColor = '#1e1e1e';
    darkMode.style.color = 'white';
    navDark.style.backgroundColor = 'black';
    navDark.style.color = 'white';
    navDark2.style.color = 'white';
    navDark3.style.color = 'white';
    navDark4.style.color = 'white';
    darkMain.style.backgroundColor = 'black';
    dark.onclick = normalMode
}

function normalMode(event) {
    dark.innerHTML = 'Dark Mode';
    darkMode.style.backgroundColor = '';
    darkMode.style.color = '';
    navDark.style.backgroundColor = '';
    navDark.style.color = '';
    navDark2.style.color = '';
    navDark3.style.color = '';
    navDark4.style.color = '';
    darkMain.style.backgroundColor = '';
    dark.onclick = turnDark;
}

dark.onclick = turnDark;
