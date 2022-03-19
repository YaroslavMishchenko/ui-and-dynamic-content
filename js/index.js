let txt = document.getElementById('text');
// Save the reference to text-field into a variable. | <input type="text">
let btn = document.getElementById('btn');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let ul = document.getElementById('collected-items');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let fee = document.getElementById('feedback');
// Save the reference to paragraph for feedback | <p class="feedback"></p>

function addItem() {
// Start function addItem.
    // Create list-item and store output in a variable.
    // Check if user entered the value in input text-field.
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       // Append list item to unordered list.
       // Clear a feedback-message.
       // Clear the text-field.
       // Put the cursor back to (textField.focus())
    // End if. 
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
    // End otherwise.
// End function addItem.
// Register your function addItem for click event on button.
}

