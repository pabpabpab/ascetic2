import el from "./../el";

export default function needMobileVersionOfSingleProductKit() {
    const largePhotoScrollRightButton = el('#largePhotoScrollRightButton');
    const largePhotoScrollLeftButton = el('#largePhotoScrollLeftButton');
    if (!largePhotoScrollRightButton && !largePhotoScrollLeftButton) {
        return false;
    }
    const rightButtonVisibility = largePhotoScrollRightButton.getBoundingClientRect().x > 0;
    const leftButtonVisibility = largePhotoScrollLeftButton.getBoundingClientRect().x > 0;
    return rightButtonVisibility || leftButtonVisibility;
}
