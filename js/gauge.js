function updateGauge(value) {
    const gaugeFill = document.getElementById('gauge-fill');
    const face = document.getElementById('face');
  
    const percentage = value * 20;
    if (percentage <= 20) {
      gaugeFill.style.backgroundColor = '#2f995b';
      face.innerHTML = '😃';
    } else if (percentage <= 40) {
      gaugeFill.style.backgroundColor = '#adc270';
      face.innerHTML = '😊';
    } else if (percentage <= 60) {
      gaugeFill.style.backgroundColor = '#f2d279';
      face.innerHTML = '😐';
    } else if (percentage <= 80) {
      gaugeFill.style.backgroundColor = '#d1966f';
      face.innerHTML = '😕';
    } else {
      gaugeFill.style.backgroundColor = '#800040';
      face.innerHTML = '😞';
    }
  
    // Set the gauge fill level
    gaugeFill.style.width = percentage + '%';
  }
  
  // Usage: Call this function with the desired value (0-5 for increments of 20%)
  updateGauge(3); // For example, to set the gauge to 60%