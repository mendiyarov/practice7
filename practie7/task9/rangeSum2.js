function rangeSum2(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

function calculateRangeSum2() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const result = rangeSum2(start, end);
    document.getElementById('result').innerText = `Sum: ${result}`;
}
