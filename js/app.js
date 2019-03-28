let games = document.querySelector("#images");
let text = document.querySelector(".count");
const nameList = document.getElementById('insert');

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
       url:'images/scarlet.jpg',
       clicks: 0
     },
     {
       name : 'Selena',
       url: 'images/selena.jpg',
       clicks:0
     }
   ]
 };
for (let i = 0; i < cats.models.length; i++) {

  nameList.insertAdjacentHTML('beforeend',`<li class='list'> ${cats.models[i].name}</li>`);

};
const listItem = document.getElementsByClassName('list');
const cutie = document.querySelector('#images');
for (let i = 0; i < cats.models.length; i++) {
listItem[i].addEventListener('click', function() {
    cutie.setAttribute('src',`${cats.models[i].url}`);
    listItem[i].style.color = 'cornflowerblue';

});
};
