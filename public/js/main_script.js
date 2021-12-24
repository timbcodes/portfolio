// Add our DOM elements
const submitBtn = document.getElementById("submit");
const successMsg = document.querySelector(".success_msg");

// This is the event listener that displays the success message when the email button is clicked
submitBtn.addEventListener("click", () => {
    successMsg.style.display = "block";
});