import csrfToken from './csrfToken.js';

export default function postJson(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'X-CSRF-Token': csrfToken.get(),
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((result) => result.json())
        .catch(error => {
            console.log(error);
        });
}
