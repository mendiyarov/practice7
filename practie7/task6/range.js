function inOrOutRange(x, y, num) {
    return num >= x && num <= y ? 'In range' : 'Out of range';
}

function checkRange() {
    const num = parseInt(document.getElementById('num').value);
    const minRange = parseInt(document.getElementById('minRange').value);
    const maxRange = parseInt(document.getElementById('maxRange').value);
    const result = inOrOutRange(minRange, maxRange, num);
    document.getElementById('result').innerText = result;
}
