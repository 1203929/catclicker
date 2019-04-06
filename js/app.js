 let cats = {
   currentCat: null,
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
 // game engine


let octopus = {
  count : cats.models[0].clicks,
  incrementer: function(){
    return this.count++;
  },
};

// listing the names of cats
let catView = {

  createList : function(){
    this.nameList = document.getElementById('insert');
  for (let i = 0; i < cats.models.length; i++) {
   this.nameList.insertAdjacentHTML('beforeend',`<li class='list'> ${cats.models[i].name}</li>`);

 }

  // this.create();
},
// method to display images accordingly when any name clicked
  render : function(){
    const cutie = document.querySelector('#images');
    this.nameList = document.getElementsByClassName('list');
    for(let i = 0; i < cats.models.length; i++){
      this.nameList[i].addEventListener('click',function(){
        cutie.setAttribute('src',`${cats.models[i].url}`);
      });
    }
    cutie.addEventListener('click',octopus.incrementer());
  },
}
// catView.render();
catView.createList();
catView.render();
