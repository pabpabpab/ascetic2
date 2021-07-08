import csrfToken from './csrfToken.js';

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



    return fetch(url, {
        method: 'POST',
        headers: {
            'X-CSRF-Token': csrfToken.get(),
            'Accept': 'application/json',
        },
        body: formData,
    })
        .then((result) => result.json())
        .catch(error => {
            console.log(error);
        });
}
