function myste() {
    
    document.addEventListener('click', function handleClick(event) {
        event.target.classList.add('bottomborder');
      });
        
}
function myFunction(element,clr) {

    element.style.color = clr;
}

// Function to generate a unique reference number
function generateUniqueReferenceNumber() {
    // Generate a timestamp-based reference number (you can use a more sophisticated method if needed)
    const timestamp = Date.now(); // Get the current timestamp
    const referenceNumber = `REF${timestamp}`; // Create a reference number using the timestamp
    return referenceNumber;
}

// Function to display the SweetAlert popup with the reference number
function showUniqueReferenceNumber() {
    const referenceNumber = generateUniqueReferenceNumber();

    // Display the unique reference number in a SweetAlert popup
    Swal.fire({
        title: 'Unique Reference Number',
        text: `Your reference number is: ${referenceNumber}`,
        icon: 'success'
    }).then(function() {
        window.location.href = "../../screens/status/check_status.html";
    });
}

// Add a click event listener to the button
const generateButton = document.getElementById('dis');
generateButton.addEventListener('click', showUniqueReferenceNumber);
