
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('greeting-form');
    const nameInput = document.getElementById('name');
    const greetingMessage = document.getElementById('greeting-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 


        const name = nameInput.value.trim();


        if (name) {
            greetingMessage.textContent = `Hello, ${name}! Welcome to our site, We are glad you visited.`;
            greetingMessage.style.display = 'block'; 
        } else {
            greetingMessage.textContent = '';
            greetingMessage.style.display = 'none'; 
        }


        nameInput.value = '';
    });
});
