// Does several things

import journalForm from "./journalForm"
import eventListener from "./eventListener"
import data from "./data"

journalForm.formBuilder();

let journalSaveButton = document.getElementById("journal_save")
journalSaveButton.addEventListener("click", eventListener.entrySaver)
data.dataDisplay();


