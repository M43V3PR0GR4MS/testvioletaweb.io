const sendPostRequest = async () => {
  try {
    const ipAddress = '54.198.38.242';
    const port = '5000';
    const endpoint = `http://${ipAddress}:${port}/`;

    const requestBody = {
      "key1": moleTA
    };

    const json = JSON.stringify(requestBody);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
      timeout: 60000
    });

    if (response.ok) {
      // Request was successful
      const responseText = await response.text();
      console.log('POST request successful');
      console.log('La categoría es: ', responseText);
    } else {
      // Request failed
      console.error('POST request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error sending POST request:', error);
    if (error.message === 'Network request timed out') {
      // Handle timeout
    }
  }
};

// Add a click event listener to the button with class 'btn1'
document.querySelector('.btn1').addEventListener('click', sendPostRequest);


// LAMBDA VER
// LAMBDA VER
// LAMBDA VER

/*
const sendPostRequest = async () => {
  try {

    const endpoint = `https://lxs84qe6r2.execute-api.us-east-1.amazonaws.com/qa`;

    const requestBody = {
      "key1": "mole" // Make sure to use a string here
    };

    const json = JSON.stringify(requestBody);

    const response = await fetch(endpoint, {
      method: 'GET',
    });

    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeButton = document.getElementById('close-popup');

    if (response.ok) {
      // Request was successful
      const responseText = await response.text();
      console.log('POST request successful');
      console.log('La categoría es: ', responseText);
      // Set the response text or handle it as needed
      popupContent.innerHTML = responseText;
    } else {
      // Request failed
      console.error('POST request failed with status:', response.status);
      popupContent.innerHTML = 'Error: Request failed with status ' + response.status;
    }
    popup.style.display = 'block'; 
    closeButton.addEventListener('click', () => {
    popup.style.display = 'none';});
    
  } catch (error) {
    console.error('Error sending POST request:', error);
    if (error.message === 'Network request timed out') {
      // Handle timeout
    }
  }
};

// Add a click event listener to the "Enviar" button
document.getElementById('enviarBtn').addEventListener('click', sendPostRequest);
</script>

<script>
// Add a click event listener to the "Enviar" button
document.getElementById('enviarBtn').addEventListener('click', function() {
  // Retrieve the value of the text area
  const molestaText = document.getElementById('moleTA').value;
  
  // Call the sendPostRequest function with the text as an argument
  sendPostRequest(molestaText);
});*/