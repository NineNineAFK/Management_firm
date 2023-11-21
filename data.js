// scripts.js

// Function to save form data to a CSV file
function saveToCSV() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create a CSV string
    var csvContent = "Name,Email,Message\n";
    csvContent += `${name},${email},${message}\n`;

    // Create or append to the Blob
    var blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a data URI and initiate a download
    var link = document.createElement("a");
    link.setAttribute("href", window.URL.createObjectURL(blob));
    link.setAttribute("download", "formData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Attach the saveToCSV function to the form submission
document.getElementById('submitBtn').addEventListener('click', saveToCSV);
