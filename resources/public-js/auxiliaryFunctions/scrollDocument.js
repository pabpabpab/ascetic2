import el from "./el";

export default function scrollDocument(distance, direction) {
    const coveredDistance = 0; // пройденное расстояние

    const scrollSpeedRatio = Number(el('#productList').dataset.scrollSpeedRatio);
    // коэф., установленный в админ-панели, определенный опытным путем (75),
    // чтобы скорость скролинга была приемлемой

    const step = Math.ceil(distance/scrollSpeedRatio);

    _scrollDocument(distance, coveredDistance, direction, step)
}

function _scrollDocument(distance, coveredDistance, direction, step) {
    if (coveredDistance > distance) {
        return;
    }

    if (direction === 'down') {
        window.scrollBy(0, step);
    } else {
        window.scrollBy(0, -step);
    }
    coveredDistance += step;
    setTimeout(() => {
        _scrollDocument(distance, coveredDistance, direction, step);
    }, 1);
}
