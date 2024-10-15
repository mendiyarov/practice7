function rangeSum1(start, n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            sum += start + j;
        }
    }
    return sum;
}

function calculateRangeSum1() {
    const start = parseInt(document.getElementById('start').value);
    const n = parseInt(document.getElementById('n').value);
    const result = rangeSum1(start, n);
    document.getElementById('result').innerText = `Sum: ${result}`;
}
