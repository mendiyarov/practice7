function createString(min, max, step) {
    let result = '';
    for (let i = min; i <= max; i += step) {
        result += i + ' ';
    }
    return result.trim();
}

function generateString() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const step = parseInt(document.getElementById('step').value);
    const result = createString(min, max, step);
    document.getElementById('result').innerText = result;
}
