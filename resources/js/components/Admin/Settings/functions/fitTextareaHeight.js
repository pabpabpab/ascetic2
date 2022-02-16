let prevLength = 0;

export default function fitTextareaHeight(node) {
    if (_hasIncreaseInTextareaLength(node)) {
        prevLength = node.value.length;
        if (node.clientHeight > 500) {
            return;
        }
        _increaseTextareaHeight(node);
        return;
    }

    if (!_hasDecreaseInTextareaLength(node)) {
        return;
    }

    _resetTextareaHeight(node);

    setTimeout(() => {
        fitTextareaHeight(node);
    },10);
}


function _hasIncreaseInTextareaLength(node) {
    return node.scrollHeight > node.clientHeight;
}
function _hasDecreaseInTextareaLength(node) {
    if (node.value.length / prevLength < 0.85) {
        prevLength = node.value.length;
        return true;
    }
    return false;
}



function _increaseTextareaHeight(node) {
    node.style.height = node.scrollHeight + 10 + 'px';
}
function _resetTextareaHeight(node) {
    node.style = null;
}
