function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2);
}

function calculateSeriesSum() {
    const n = parseInt(document.getElementById('n').value);
    const result = seriesSum(n);
    document.getElementById('result').innerText = `Sum: ${result}`;
}
