// code for dynamic epoch time
const timeInfo = document.querySelector(".epoch-time");
let currentTime;
function updateTime() {
  currentTime = Math.floor(Date.now() / 1000);
  timeInfo.textContent = currentTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately on page load
updateTime();
