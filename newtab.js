// Function to calculate hours left in a day
function calculateHoursLeft() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const hoursLeft = (endOfDay - now) / 3600000; // 3600000 milliseconds in an hour
    return hoursLeft.toFixed(2);
  }
  
  // Function to calculate days left in a year
  function calculateDaysLeft() {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    const daysLeft = (endOfYear - now) / 86400000; // 86400000 milliseconds in a day
    return daysLeft.toFixed(0);
  }
  
  // Update the HTML with the calculated values
  document.getElementById("hoursLeft").textContent = `${calculateHoursLeft()} hours`;
  document.getElementById("daysLeft").textContent = `${calculateDaysLeft()} days`;
  