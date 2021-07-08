import el from './el.js';
import Register from './register.js';

export default function onBodyClickListener() {
    el('html').addEventListener('click', (e) => {
        // closeElements(e); // порядок важен
        clickHandler(e);
    });
}


function clickHandler(e) {
    if (!e.target.dataset.js) return;
    e.preventDefault();
    const args = e.target.dataset.js.split('-');

    switch (args[0]) {
        case 'register':
            const regForm = new Register();
            break;
        case 'login':
            console.log('login');
            break;
    }
}

/*
function closeElements(e) {
     closeRegisterForm(e);
}

function closeRegisterForm(e) {
    if (!el('#regForm')) {
        return;
    }
    if (e.target.parentNode === el('#regForm')) {
        return;
    }
    if (e.target === el('#regForm')) {
        return;
    }
    el('#regForm').remove();
}
*/
