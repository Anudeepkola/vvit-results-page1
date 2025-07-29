function showNotFound() {
  const input = document.getElementById("rollInput").value.trim();
  const message = document.getElementById("message");

  if (input === "") {
    message.textContent = "Please enter a valid roll number.";
  } else {
    message.textContent = "Result Not Found.";
  }

  message.classList.remove("hidden");
}
