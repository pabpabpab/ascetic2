let prevLength = 0;


export default function fitTextareaHeight(event) {

    if (_hasIncreaseInTextareaLength(event)) {
        prevLength = event.target.value.length;
        if (event.target.clientHeight > 500) {
            return;
        }
        _increaseTextareaHeight(event);
        return;
    }

    if (!_hasDecreaseInTextareaLength(event)) {
        return;
    }

    _resetTextareaHeight(event);

    setTimeout(() => {
        fitTextareaHeight(event);
    },10);
}



function _hasIncreaseInTextareaLength(event) {
    return event.target.scrollHeight > event.target.clientHeight;
}

function _increaseTextareaHeight(event) {
    event.target.style.height = event.target.scrollHeight + 20 + 'px';
}

function _hasDecreaseInTextareaLength(event) {
    if (event.target.value.length / prevLength < 0.85) {
        prevLength = event.target.value.length;
        return true;
    }
    return false;
}

function _resetTextareaHeight(event) {
    event.target.style = null;
}
