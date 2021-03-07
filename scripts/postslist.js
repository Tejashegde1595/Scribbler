
var deleteModal = document.getElementById('deleteModal');


var title;
var author;
var cardBody;

/*
Function to set the values for accesing in the upcoming pages
*/
function setValues(author, cardTitle, cardBody) {
    title = document.getElementById(cardTitle).innerText;
    author = document.getElementById(author).innerHTML;
    cardBody = document.getElementById(cardBody).innerHTML;

    localStorage.setItem("titleVal", title);
    localStorage.setItem("author", author);
    localStorage.setItem("cardBody", cardBody);

    location.href = "./post.html";


}


/*
Function to show the modal
*/

 function showModal(value){
    deleteModal.classList.remove('hide');
    deleteModal.classList.add('show');
    localStorage.setItem('deleteSpace',value);
 }


/*
Function to hide the Modal after clicking No
*/
 function hideModal(){
    deleteModal.classList.remove('show');
    deleteModal.classList.add('hide');
 }


/*
Function to delete the Post
*/
 function deletePost(){
     var deletePost = document.getElementById(localStorage.getItem('deleteSpace'));
     deletePost.style.display='none';
     hideModal();
 }