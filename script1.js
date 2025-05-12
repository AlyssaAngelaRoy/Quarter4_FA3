let contacts = [];

document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('contactInput').value.trim();
    if (input) {
        if (contacts.length >= 7) {
            contacts.shift(); // Remove the first element if the list exceeds 7
        }
        contacts.push(input); // Add the new contact
        updateContactsList();
    }
    document.getElementById('contactInput').value = ''; // Clear the input
});

document.getElementById('removeButton').addEventListener('click', function() {
    if (contacts.length > 0) {
        contacts.pop(); // Remove the last contact
        updateContactsList();
    }
});

function updateContactsList() {
    const listDiv = document.getElementById('contactsList');
    listDiv.innerHTML = contacts.join('<br>'); // Display contacts
}