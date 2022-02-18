import getJson from "./getJson";

export default function postFormData(url, formData) {

    /*
    // собрать все в formdata
    const formData = new FormData();
    formData.append('name', el('#regName').value);
    formData.append('email', el('#regEmail').value);
    formData.append('password', el('#regPassword').value);
    formData.append('password_confirmation', el('#regPassword_confirmation').value);

    postFormData(this.postUrl, formData).then((data) => {
        console.log(data);
    });
    */


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
