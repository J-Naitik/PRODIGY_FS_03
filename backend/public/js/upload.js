// Get the form element
const form = document.getElementById('uploadForm');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a FormData object to handle file uploads
  const formData = new FormData(form);

  // Send the form data using Fetch API
  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Product uploaded successfully!');
      form.reset(); // Reset the form
    } else {
      alert('Failed to upload product. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while uploading the product.');
  });
});
