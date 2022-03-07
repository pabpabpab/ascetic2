export default function getListOfColorsHtml(colorsArr) {
    const catsArr = colorsArr.map(item => item.name);
    return catsArr.join(', ');
}
