var addCat = function(name, favFoodQuote, img) {
  var ulCat = createUlCat();
  var liName = createLi(name);
  var liFood = createLi(favFoodQuote);
  var liPhoto = createPhoto(img);

  appendElements(ulCat, liName, liFood, liPhoto);
}

var createUlCat = function() {
  var ul = document.createElement("ul")
  ul.classList.add("cat")
  return ul
}

var createLi = function(newLi) {
  var li = document.createElement("li")
  li.innerText = newLi
  return li
}

var createPhoto = function(newImg) {
  var img = document.createElement("img")
  var li document.createElement("li")
  img.src = newImg
  li.appendChild(img)
  return li
}//refacted to have img inside li

var appendElements = function(ulCat, liName, liFood, liPhoto) {
  var section = document.querySelector("#cats")
  section.appendChild(ulCat)
  ulCat.appendChild(liName)
  ulCat.appendChild(liFood)
  ulCat.appendChild(liPhoto)
}

var app = function() {
  addCat("Billy", "cabbage... yes really", "/billy.jpg")
}

window.addEventListener('load', app)
// window.onload = app //2nd way to load in window
