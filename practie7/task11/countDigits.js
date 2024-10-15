function countDigits(n) {
    return n.toString().length;
}

function calculateDigits() {
    const number = document.getElementById('number').value;
    const result = countDigits(number);
    document.getElementById('result').innerText = `Number of digits: ${result}`;
}
