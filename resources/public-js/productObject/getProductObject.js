export default function getProductObject(product) {
    const obj = {};
    obj.id = product.id;
    obj.name = product.name;
    obj.slug = product.slug;

    const params = JSON.parse(product.parameters);
    obj.price = params.price;
    obj.categories = params.categories;
    obj.colors = params.colors;
    obj.materials = params.materials;

    obj.photos = JSON.parse(product.photo_set);

    obj.descripton = '';
    if (product?.description?.description) {
        obj.description = product.description.description;
    }

    return obj;
}
