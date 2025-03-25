// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts=document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', ()=>{
    handleHeartClick(heart);
  })
})
function handleHeartClick(heart) {
  mimicServerCall()
    .then(() => {
      // Server request was successful
      if (heart.textContent === "♡") {
        heart.textContent = "♥"; // Change to full heart
        heart.classList.add("activated-heart"); // Make it red
      } else {
        heart.textContent = "♡"; // Change back to empty heart
        heart.classList.remove("activated-heart"); // Remove red color
      }
    })
    .catch(() => {
      // Server request failed - Show error modal
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden"); // Show error modal
      errorModal.querySelector("#modal-message").textContent = "Server error. Try again!";

      // Hide error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
