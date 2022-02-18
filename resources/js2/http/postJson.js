import getJson from "./getJson";

export default function postJson(url, data) {

    const csrfUrl = '/public-js/csrf';
    return getJson(csrfUrl).then((token) => {

        return fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((result) => result.json())
        .catch(error => {
            console.log(error);
        });

    });

}
