let form = document.getElementById ('form');
let isChecked = document.getAttribute('checked(this.checked)')
let nomber = 4;

form.addEventListener ('submit', function(event){
   event.preventDefault();
   const input = document.getElementById('text');

if (!input.value) {
      return;
   }
  
isChecked.addEventListener('isCheked', () => {

      let theme = document.getElementById('theme');

      if (theme.getAttribute('href') == 'styles.css') {
         theme.href = 'dark.css';
      } else {
         theme.href = 'styles.css';
      }

      return (input.value = '');
   });



let myText = document.getElementById('myText');
myText.insertAdjacentHTML('beforeend', '<div class = "nomber">'+'<h2 >'+"Задача "+nomber+'</h2>'+'<p>'+input.value+'</p/div>');

nomber++;
input.value = ''
})