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
   this.nameList.insertAdjacentHTML('beforeend',` <li class='list'><button class="click"> ${cats.models[i].name} </button></li>`);

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



// TO add feched images on the page
// function addImage(data) {
//     let htmlContent = '';
//     const firstImage = data.results[0];
//
//     if (firstImage) {
//         htmlContent = `<figure>
//             <img src="${firstImage.urls.small}" alt="${searchedForText}">
//             <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
//         </figure>`;
//     } else {
//         htmlContent = 'Unfortunately, no image was returned for your search.'
//     }
//
//     responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
// }



// complete fetch API concept to to fetch and Image using API key
// fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
//     headers: {
//         Authorization: 'Client-ID abc123'
//     }
// }).then(response => response.json())
// .then(addImage)
// .catch(e => requestError(e, 'image'));
//
// function addImage(data) {
//     debugger;
// }
// // Handling request
// function requestError(e, part) {
//     console.log(e);
//     responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
// }
