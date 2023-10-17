import fetch from 'node-fetch';

const sendPostRequest = async () => {
  try {
    const ipAddress = '54.198.38.242';
    const port = '5000';
    const endpoint = `http://${ipAddress}:${port}/`;

    const requestBody = {

      "key1": mole

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
      setResponseText(responseText);
    } else {
      // Request failed
      console.error('POST request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error sending POST request:', error);
    if (error.message === 'Network request timed out') {
      setTimeoutPopupVisible(true);
    }
  }
};