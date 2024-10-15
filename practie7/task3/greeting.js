function greeting(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

function showGreeting() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const result = greeting(firstName, lastName, age);
    document.getElementById('result').innerText = result;
}
