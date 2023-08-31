const input = document.querySelector('.get-note');
const addNoteBtn = document.querySelector('#add-btn');
const allNotes = [];

const notesList = document.querySelector('.notes-list');
addNoteBtn.addEventListener("click", addNewNote);
document.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        addNewNote();
    }
});
function addNewNote() {
    const note = input.value.trim();
    if (note) {
        const color = document.querySelector('.get-color').value;
        allNotes.push({ note, color });
        input.value = '';
        input.focus();
        displayNotes();
    } else {
        alert("A note can't be empty.");
    }
}
function displayNotes() {
    notesList.innerHTML = allNotes.length > 0 ?
        allNotes.map((note, index) => `
            <div class="note" style="background-color:${note.color};">
                <div class="note-view">${note.note}</div>
                <p>&#x1f5d1</p>
            </div>
            
        `).join('') :
        '<div class="no-notes"><h4 class="msg">You haven\'t added notes yet.</h4></div>';

       
}