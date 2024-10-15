function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}

function checkSquare() {
    const num = parseInt(document.getElementById('number').value);
    const result = isSquare(num) ? 'It is a square number' : 'It is not a square number';
    document.getElementById('result').innerText = result;
}
