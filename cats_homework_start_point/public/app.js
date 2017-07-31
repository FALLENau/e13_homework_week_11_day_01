var addCat = function(name, favFoodQuote, img) {
  var ulCat = createUlCat();
  var liName = createLi(name);
  var liFood = createLi(favFoodQuote);
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

var createLi = function(li) {
  var newLi = document.createElement("li")
  name.innerText = li
  return newLi
}

var createPhoto = function(newImg) {
  var img = document.createElement("li")
  name.innerText =  width="500" + newImg
  return img
}

var appendElements = function(ulCat, liName, liFood, liPhoto) {
  var section = document.querySelector("#cats")
  section.appendChild(ulCat)
  ulCat.appendChild(liName)
  liName.appendChild(liFood)
  liFood.appendChild(liPhoto)
  // liPhoto.appendChild()
}

var app = function() {
  addCat("Billy", "cabbage... yes really", "/billy.jpg")
}

window.addEventListener('load', app)
