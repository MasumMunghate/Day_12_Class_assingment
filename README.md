# Day_12_Class_assingment

 have a text input field (input) where users can enter their notes, a button (addNoteBtn) to add notes, and an array (allNotes) to store all the notes.

The notesList variable is a reference to the container where the notes will be displayed.

When the "Add Note" button is clicked, or when the "Enter" key is pressed, the addNewNote() function is called.

Inside addNewNote(), you get the note text from the input field and the selected color.

If the note isn't empty, you add the note and its color to the allNotes array. Then, you clear the input field and focus on it for the next note.

The displayNotes() function creates HTML for each note using the map() function. It sets the background color, note text, and a delete icon for each note.

If there are no notes, it shows a message saying "You haven't added notes yet."


