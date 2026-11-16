document.getElementById('simpleForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault(); 

    // Grab the values entered by the user
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Trigger a popup alert with the user's name
    alert(`Thanks for submitting, ${name}!\nEmail registered: ${email}`);

    // Clear the form fields after successful submission
    this.reset();
});