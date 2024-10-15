function getMin(a, b, c) {
    return Math.min(a, b, c);
}

function calculateMin() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = getMin(num1, num2, num3);
    document.getElementById('result').innerText = `Minimum: ${result}`;
}
