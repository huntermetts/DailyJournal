// The function that runs when the "save" button is clicked
// import data from "./data";
import collectEntries from "./collectEntries";
import data from "./data"
const eventListener = {
    entrySaver () {
        // Get input values from form
        // Targeting each value of the field with '.value' and const
        const date = document.querySelector("#journal_date").value;
        const concepts = document.querySelector("#journal_concepts").value;
        const entry = document.querySelector("#journal_entry").value;
        const mood = document.querySelector("#journal_mood").value;
        // Then console.log-ing the values declared above
        // console.log(creator);
        // console.log(name);
        // console.log(shape);
        // console.log(color);

        // Creating an object to represnt a journal entry:
        // This could possibly go in another module and be called here if the project was bigger
        const entryToSave = {
            date: date,
            concepts: concepts,
            entry: entry,
            mood: mood
        }
        console.log(entryToSave);

        // Post to API and passing legoToSave (the object above) as an argument
        collectEntries.postAnEntry(entryToSave)
        .then(word => {
            console.log(word)
            data.dataDisplay()})
    }
}
export default eventListener