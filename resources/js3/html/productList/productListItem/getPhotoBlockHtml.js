export default function getPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<div>
                <a href='/product/${product.slug}-${product.id}'>
                    <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                       alt=""
                       class="photo__size3"/>
                </a>
            </div>`;
}
