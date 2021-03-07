// Get the SingUp modal
var signUpmodal = document.getElementById("signUpModal");

// Get the SingIn modal
var signInmodal = document.getElementById("signInModal");
// When the user clicks on the button, open the modal
var postModal = document.getElementById("postModal");

/*
Function which displays the signUp Modal
*/
function signUp() {
    signUpmodal.style.display = "block";
}



/*
Function which displays the signIn Modal
*/

function signIn() {
    signInmodal.style.display = "block";
}


/*
Function which displays the createPost Modal
*/

function createPost(){
    postModal.style.display="block";
}

// When the user clicks on <span> (x), close the modal

/*
Function for the close Sign Up Modal
*/

function closeSignUp() {
    signUpmodal.style.display = "none";
}


/*
Function for the close Sign In Modal
*/

function closeSignIn() {
    signInmodal.style.display = "none";
}


/*
Function for the close Post Modal
*/

function closePost(){
    postModal.style.display="none";
}


/*
Function for toggling signUp and signIn Modal
*/
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



/*
Function for navigating to all Posts page
*/
function allPosts(){
    window.location.href="/html/postslist.html";
}