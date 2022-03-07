export default function getListOfMaterialsHtml(materialsArr) {
    const catsArr = materialsArr.map(item => item.name);
    return catsArr.join(', ');
}
