// Get the SingUp modal
var signUpmodal = document.getElementById("signUpModal");

// Get the SingIn modal
var signInmodal = document.getElementById("signInModal");
// When the user clicks on the button, open the modal
var postModal = document.getElementById("postModal");
function signUp() {
    signUpmodal.style.display = "block";
}

function signIn() {
    signInmodal.style.display = "block";
}

function createPost(){
    postModal.style.display="block";
}

// When the user clicks on <span> (x), close the modal
function closeSignUp() {
    signUpmodal.style.display = "none";
}

function closeSignIn() {
    signInmodal.style.display = "none";
}

function closePost(){
    postModal.style.display="none";
}


function toggleSignUp(){
    signInmodal.style.display = "none";
    signUpmodal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpmodal) {
    signUpmodal.style.display = "none";
  }
  if(event.target == signInmodal){
      signInmodal.style.display="none";
  }
  if(event.target == postModal){
    postModal.style.display="none";
  }
}

function allPosts(){
    window.location.href="/html/postslist.html";
}