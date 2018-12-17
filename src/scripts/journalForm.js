// Creates all html elements and appends them

const journalForm = {
    formBuilder(){
         let form =
        `<article>
             <fieldset>
                 <label for="journal_date">Date of Entry:</label>
                 <input id="journal_date" name="journal_date" type="date" autofocus/>
             </fieldset>
             <fieldset>
                 <label for="journal_concepts">Concepts Covered:</label>
                 <input id="journal_concepts" name="journal_concepts" type="text" autofocus/>
             </fieldset>
             <fieldset>
                 <label for="journal_entry">Journal Entry:</label>
                 <textarea rows="4" cols="50"  id="journal_entry" name="journal_entry" form="usrform"></textarea>
             </fieldset>
             <fieldset>
                 <label for="journal_mood" id="journal_mood">Journal Mood:</label>
                 <select>
                    <option value="Good">Good</option>
                    <option value="Not so good">Not so good</option>
                    <option value="Not good">Not good</option>
                </select>
             </fieldset>
          <button id="journal_save">Save Journal Entry</button>
        </article>`

        let displayForm = document.querySelector(".myContainer");
        displayForm.innerHTML = form;
    },

    entryBuilder(entryObject){
        console.log(entryObject, "obj");
            let entryArticle = document.createElement("article")
            let entryDate = document.createElement("p")
            entryDate.textContent = entryObject.date
            let entryConcept = document.createElement("p")
            entryConcept.textContent = entryObject.concepts
            let entryEntry = document.createElement("p")
            entryEntry.textContent = entryObject.entry
            let entryMood = document.createElement("p")
            entryMood.textContent = entryObject.mood
    
            entryArticle.appendChild(entryDate);
            entryArticle.appendChild(entryConcept);
            entryArticle.appendChild(entryEntry);
            entryArticle.appendChild(entryMood);
    
            return entryArticle;
    }
}

export default journalForm;