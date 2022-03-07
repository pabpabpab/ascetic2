export default function getPurePhoneNumber(value) {
    const allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const filtered = value.split('').filter(item => allowed.includes(item));
    return `+7${filtered.slice(1).join('')}`;
}
