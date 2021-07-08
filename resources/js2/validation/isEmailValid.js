export default function isEmailValid(email) {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(email);
}
