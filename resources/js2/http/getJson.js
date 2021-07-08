import csrfToken from './csrfToken.js';

export default function getJson(url) {
    return fetch(url)
        .then((result) => {
            csrfToken.set(result.headers.get('X-CSRF-Token'));
            return result.json();
        })
        .catch(error => {
            console.log(error);
        });
}
