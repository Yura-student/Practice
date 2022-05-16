let form = document.getElementById('form');
let isChecked = document.getElementById('check');
let nomber = 4;


isChecked.addEventListener('change', () => {
   document.body.classList.toggle('dark')
   localStorage.setItem('dark', isChecked.checked )

});

if(localStorage.getItem('dark') === 'true'){
   document.body.classList.add('dark')
   isChecked.checked = true
   };


document.querySelector('main').addEventListener('click', removePara);

function removePara(e) {
  const isDelete = e.target.closest('.delet');
  if(isDelete){
    isDelete.parentNode.remove();
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
      '</p>'+'<div class = "delet">' + '<button>-</button>'+'</div/div>'
    )
  nomber++;
  
  input.value = "";
});
