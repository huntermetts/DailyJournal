import journalForm from "./journalForm"
import eventListener from "./eventListener"

journalForm.formBuilder();

let journalSaveButton = document.getElementById("journal_save")
journalSaveButton.addEventListener("click", eventListener.handleJournalSave)