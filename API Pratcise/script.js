var API_KEY = "0bd2326039f255b2818a8e89a30670fc";

// CATEGORY BUTTONS
var catButtons = document.querySelectorAll(".categories button");

for (var i = 0; i < catButtons.length; i++) {
    catButtons[i].addEventListener("click", function () {
        var cat = this.getAttribute("data-category");
        fetchCategoryNews(cat);
    });
}

// SEARCH BUTTON
var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
    var text = document.getElementById("searchInput").value;

    if (text.trim() === "") {
        alert("Please type something!");
    } else {
        searchNews(text);
    }
});

// FETCH CATEGORY NEWS
function fetchCategoryNews(cat) {
    var url = "https://gnews.io/api/v4/top-headlines?category=" 
              + cat + "&country=in&lang=en&apikey=" + API_KEY;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            showNews(data.articles);
        });
}

// SEARCH NEWS
function searchNews(text) {
    var url = "https://gnews.io/api/v4/search?q=" 
              + text + "&lang=en&country=in&apikey=" + API_KEY;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            showNews(data.articles);
        });
}

// DISPLAY NEWS
function showNews(arr) {
    var box = document.getElementById("news-container");
    box.innerHTML = "";

    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];

        var card = document.createElement("div");
        card.className = "news-card";

        var img = "<img src='" + n.image + "'>";
        var title = "<h2>" + n.title + "</h2>";
        var desc = "<p>" + n.description + "</p>";
        var link = "<a href='" + n.url + "' target='_blank'>Read More</a>";

        card.innerHTML = img + title + desc + link;

        box.appendChild(card);
    }
}

// DEFAULT NEWS (GENERAL)
fetchCategoryNews("general");
