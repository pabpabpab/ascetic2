import getJson from "./getJson";

export default function postFormData(url, formData) {

    const csrfUrl = '/public-js/csrf';
    return getJson(csrfUrl).then((token) => {

        return fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': token,
                'Accept': 'application/json',
            },
            body: formData,
        })
        .then((result) => result.json())
        .catch(error => {
            console.log(error);
        });

    });

}
