// Get the "Add a Quote" button
const addButton = document.querySelector('button');

// Add an event listener to the button
addButton.addEventListener('click', function () {
    // Get the home section
    const homeSection = document.querySelector('#home');
    
    // Get inputs from the user
    const quote = prompt("Enter a quote:");
    const author = prompt("Enter the author:");

    // Create a new blockquote element
    const newQuote = document.createElement('blockquote');
    newQuote.textContent = `"${quote}" - ${author}`;

    // Insert the new quote before the button
    homeSection.insertBefore(newQuote, addButton);
});

// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the form data
    const formData = new FormData(form);

    // Log the form data to the console
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });

    // Reset the form
    form.reset();

    // Alert the user that the message has been sent
    alert('Message sent!');
});


