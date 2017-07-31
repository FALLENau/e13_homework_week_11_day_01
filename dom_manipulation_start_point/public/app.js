var app = function () {
  var hideQOTD = document.getElementById('quote-of-the-day')
  hideQOTD.hidden = true

  var articleColor = document.getElementsByTagName("article")

  Array.from(articleColor).forEach(function(article){
    article.className = "blue-quote"
  })
}

window.addEventListener('load', app);
