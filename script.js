// code for dynamic epoch time
const timeInfo = document.querySelector(".epoch-time");
const button = document.querySelector(".toggle-btn");
const text = document.querySelector(".text-content");

function showButtonOnOverflow() {
  let isOverflowing = text.scrollHeight > text.clientHeight;
  console.log(text.scrollHeight, text.clientHeight);

  if (!isOverflowing) {
    // If the text is not overflowing, do nothing
    return;
  }
  button.style.display = "block";
}

showButtonOnOverflow();

button.addEventListener("click", function () {
  // Toggle the classes
  text.classList.toggle("clamped");
  text.classList.toggle("expanded");

  // Update the button text based on the current state
  if (text.classList.contains("expanded")) {
    this.textContent = "Read Less";
    this.setAttribute("aria-expanded", "true");
  } else {
    this.textContent = "Read More";
    this.setAttribute("aria-expanded", "false");
  }
});

let currentTime;
function updateTime() {
  currentTime = Math.floor(Date.now() / 1000);
  timeInfo.textContent = currentTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately on page load
updateTime();
