function evenOrOdd(a, b, c) {
    const isEven = (n) => n % 2 === 0;
    if (isEven(a) && isEven(b) && isEven(c)) {
        return 'even';
    } else if (!isEven(a) && !isEven(b) && !isEven(c)) {
        return 'odd';
    } else {
        return 'even/odd';
    }
}

function checkEvenOrOdd() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const result = evenOrOdd(num1, num2, num3);
    document.getElementById('result').innerText = result;
}
