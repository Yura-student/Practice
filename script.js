let form = document.getElementById('form');
let isChecked = document.getElementById('check');
/* let del = document.getElementById('myText');
let button = document.querySelectorAll('.clear'); */
let nomber = 4;


isChecked.addEventListener('change', () => {
   document.body.classList.toggle('dark')
   localStorage.setItem('dark', isChecked.checked )

});



if(localStorage.getItem('dark') === 'true'){
   document.body.classList.add('dark')
   isChecked.checked = true
   };

  
 
/* document.body.addEventListener('click', e => {
  if (e.target.classList.contains('clear'))  


function clearFunction() {
  del.querySelectorAll('.nomber').forEach((del) => del.remove());
  nomber = 1;
};
}); */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').addEventListener('click', removePara);
});

function removePara(e) {
  /* console.log(e.target, e.currentTarget);*/
  let main = e.currentTarget;
  let del = e.target.closest('.delet');
  let div = document.querySelector('.nomber', [length - 1]);

  if(del){
    div.remove();
  }
}


form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.getElementById('text');

  if (!input.value) {
    return;
  }



  let myText = document.getElementById('myText');
  myText.insertAdjacentHTML(
    "beforeend",
    '<div class = "nomber">' +
      '<h2 >' +
      'Задача ' +
      nomber +
      '</h2>' +
      '<p>' +
      input.value +
      '</p>'+'<div class = "delet">' + '<button class = "clear">-</button>'+'</div/div>'
    )
  nomber++;



  
  input.value = "";
});
