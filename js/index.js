let fm = document.querySelector('form');
let txt = document.getElementById('text');
// Save the reference to text-field into a variable. | <input type="text">
let btn = document.getElementById('btn');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let ul = document.getElementById('collected-items');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let fee = document.getElementById('feedback');
// Save the reference to paragraph for feedback | <p class="feedback"></p>

function addItem(item) {
   item.preventDefault();
   let taskItems = [];
   let container = {};

   if (txt.value !== '') {
      container.item = txt.value;
      taskItems.push(txt.value);

      for (let i of taskItems) {
         // create a variable to keep the li tag
         let li = document.createElement('li');
         li.textContent = i;
         ul.appendChild(li);
      }
      fm.reset();
      // fm.textContent = '';

   } else { 
      //error 
      console.log("oops");
   }

}

fm.addEventListener('submit', addItem)
