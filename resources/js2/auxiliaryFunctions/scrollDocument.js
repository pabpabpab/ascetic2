export default function scrollDocument(distance, direction) {
    const coveredDistance = 0; // пройденное расстояние
    _scrollDocument(distance, coveredDistance, direction)
}

function _scrollDocument(distance, coveredDistance, direction) {
    if (coveredDistance > distance) {
        return;
    }
    const step = 3; // px
    if (direction === 'down') {
        window.scrollBy(0, step);
    } else {
        window.scrollBy(0, -step);
    }
    coveredDistance += step;
    setTimeout(() => {
        _scrollDocument(distance, coveredDistance, direction);
    }, 1);
}
