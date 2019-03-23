var games = document.querySelector(".images");
var text = document.querySelector(".count");
var count = 0;
games.addEventListener('click', function(){
  count++;
  text.innerHTML = count;
});
 let cats = {
   models : [
     {
       name : 'Anne',
       url : 'images/anne.jpg',
       clicks: 0
     },
     {
       name: 'Emilia',
       url: 'images/emilia.jpg',
       clicks: 0
     },
     {
       name : 'Janifer',
       url : 'images/jenifer.jpg',
       clicks:0
     },
     {
       name : 'Scarlet',
       url:'images/carlet.jpg',
       clicks: 0
     },
     {
       name : 'Selena',
       url: 'images/selena.jpg',
       clicks:0
     }
   ]
 };
 let division = document.getElementById('insert');
for (let i = 0; i < cats.models.length; i++) {
  let char = cats.models[i];
  const element = document.createElement('li');
  element.textContent = cats.models[i].name;
    let list = document.body.appendChild(element);
    element.setAttribute('style','text-align:center; display:inline-block;text-decoration:none;margin-left:5%;');

}
