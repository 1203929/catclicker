var games = document.querySelector(".images");
var text = document.querySelector(".count");
var count = 0;
games.addEventListener('click', function(){
  count++;
  text.innerHTML = count;
});
