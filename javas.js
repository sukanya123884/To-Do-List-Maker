window.onload = function () {
  displayNotes();
};
function addTODO() {
  const noteInput = document.getElementById("user1");
  const noteText = user1.value.trim();
  if (noteText === "") {
    window.alert("Note can't be empty!");
    return;
  }
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
}

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    //create 1st div
    const noteDiv = document.createElement("div");
    //add some style to div
    noteDiv.style.padding="7px";
    noteDiv.style.margin="7px";
    noteDiv.style.borderRadius="0.4cm";
    noteDiv.style.height="max-content";
    noteDiv.style.width="440px";
    noteDiv.style.border="2px solid black"
    noteDiv.style.fontSize="27px";
    noteDiv.style.display="flex";
    //create checkbox
    const check=document.createElement("input");
    check.type="checkbox";
    check.style.width="20px";
    check.style.height="20px";
    //create span
    const span=document.createElement("span");
    span.style.width="390px";
    span.style.height="max-content";
    span.style.marginLeft="15px";
    span.style.marginRight="7px";
    //add note to span
    span.textContent=note;
    //check the checkbox 
    check.addEventListener("change",function(){
        if(this.checked)
        {
            span.style.textDecoration="line-through";
            span.style.color="rgb(147, 137, 137)";

        }
        else{
            span.style.textDecoration="none";
            span.style.color="rgb(255, 239, 239)";
            
        }
    })
    //create delete button
    const del=document.createElement("button");
    del.innerHTML="Delete";
    del.style.padding="5px";
    del.style.fontSize="16px";
    //onclick on delete
    del.onclick=function(){
        deleteNotes(index);
    }
    //append span and check and del to noteDiv
    noteDiv.appendChild(check);
    noteDiv.appendChild(span);
    noteDiv.appendChild(del);
    //append noteDiv to container
    container.appendChild(noteDiv);
    })
 function deleteNotes(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1); // Remove one note at index
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

}
