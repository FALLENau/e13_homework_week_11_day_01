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

var createLi = function(li) {
  var newLi = document.createElement("li")
  name.innerText = li
  return newLi
}

var createPhoto = function(newImg) {
  var img = document.createElement("img")
  img.src = newImg
  return img
}

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
