import collectEntries from "./collectEntries";
import journalForm from "./journalForm";

const data = {
    dataDisplay(){
        // Where the data is processed from collectEntries
   collectEntries.getAllEntries()
    .then(allEntries => {
      let entryDocFragment = document.createDocumentFragment();
        allEntries.forEach(entryItem => {
        let entryHtml = journalForm.entryBuilder(entryItem)
        console.log(entryHtml)
        entryDocFragment.appendChild(entryHtml)
      })
        let outputEntries = document.querySelector(".entriesContainer")
        outputEntries.appendChild(entryDocFragment)
    })
  }
}




export default data