
var deleteModal = document.getElementById('deleteModal');


var title;
var author;
var cardBody;


function setValues(author, cardTitle, cardBody) {
    title = document.getElementById(cardTitle).innerText;
    author = document.getElementById(author).innerHTML;
    cardBody = document.getElementById(cardBody).innerHTML;

    localStorage.setItem("titleVal", title);
    localStorage.setItem("author", author);
    localStorage.setItem("cardBody", cardBody);

    location.href = "./post.html";


}

 function showModal(value){
     console.log('showing modal');
    deleteModal.classList.remove('hide');
    deleteModal.classList.add('show');
    localStorage.setItem('deleteSpace',value);
 }


 function hideModal(){
    deleteModal.classList.remove('show');
    deleteModal.classList.add('hide');
 }


 function deletePost(){
     var deletePost = document.getElementById(localStorage.getItem('deleteSpace'));
     deletePost.style.display='none';
     hideModal();
 }