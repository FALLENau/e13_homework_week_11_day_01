var addCat = function(name, favFoodQuote, img) {
  var ulCat = createUlCat();
  var liName = createName(name);
  var liFood = createFavQuote(favFoodQuote);
  var liPhoto = createPhoto(img);

  appendElements(ulCat, liName, liFood, liPhoto);
}//name = author, favFoodQuote = quoteText
//liName = cite, liFood = blockquote
//ulCat = quoteArticle

var createUlCat = function() {
  var ul = document.createElement("ul")
  ul.classList.add("cat")
  return ul
}

var createName = function(nameOf) {
  var name = document.createElement("li")
  name.innerText = nameOf
  return name
}

var createFavQuote = function(foodOf) {
  var food = document.createElement("li")
  name.innerText = foodOf
  return food
}

var createPhoto = function(newImg) {
  var img = document.createElement("li")
  name.innerText =  width="500" + newImg
  return img
}

var appendElements = function(ulCat, liName, liFood, liPhoto) {
  var section = document.querySelector("#cats")
  ulCat.appendChild(liName)
  liName.appendChild(liFood)
  liFood.appendChild(liPhoto)
  // liPhoto.appendChild()
}

var app = function() {
  addCat("Billy", "cabbage... yes really", "/billy.jpg")
}

window.addEventListener('load', app)
