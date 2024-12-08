//  alert("hello");
 function creation(){
//    alert("hello")
   const stickynotes=document.querySelector(".sticky-notes");
   const notecontainer=document.createElement("div");
   notecontainer.classList.add("sticky-container");
   const noteContent =document.createElement("div");
   noteContent.classList.add("note-content");
   noteContent.contentEditable = true;
   noteContent.textContent="New note"
   const noteaction=document.createElement("div");
   noteaction.classList.add("note-actions");
   const deleteButton=document.createElement("button");
   deleteButton.classList.add("delete-notes");
   deleteButton.textContent="Delete";
   deleteButton.onclick = function(){
       notecontainer.remove();
   };
   noteaction.appendChild(deleteButton);
   notecontainer.appendChild(noteContent);
   notecontainer.appendChild(noteaction);
   stickynotes.appendChild(notecontainer);
 }
function deletion(button){
    const notecontainer=button.closest(".sticky-container");
    notecontainer.remove()
     
    // alert("Do you want to delete")

 }
