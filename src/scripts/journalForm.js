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
                 <label for="journal_mood">Journal Mood:</label>
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
    }
}

export default journalForm;