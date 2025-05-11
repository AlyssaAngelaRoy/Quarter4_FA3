document.getElementById('inputButton').addEventListener('click', function() {
    let number;
    
    // Loop until a valid number is entered
    do {
        number = prompt("Please enter a number:");
    } while (isNaN(number) || number === null || number.trim() === "");

    number = parseInt(number); // Convert the input to an integer
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Number inputted: ${number}<br>`;

    if (number % 2 === 1) {
        // If the number is odd, print a rectangle
        for (let i = number; i >= 1; i--) {
            outputDiv.innerHTML += (String(i).repeat(number) + '<br>');
        }
    } else {
        // If the number is even, print a triangle
        for (let i = number; i >= 1; i--) {
            outputDiv.innerHTML += (String(i).repeat(i) + '<br>');
        }
    }
});