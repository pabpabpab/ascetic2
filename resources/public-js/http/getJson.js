export default function getJson(url) {
    return fetch(url)
        .then((result) => {
            return result.json();
        })
        .catch(error => {
            console.log(error);
        });
}
