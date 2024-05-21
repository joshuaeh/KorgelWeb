// script to grab the X most recent news items from news.html and display them on the home page
// X is defined by the variable "numNews" in the script
// Each news item is a <p> element with class "newsitem"

// Define variables
var numNews = 3; // number of news items to display
var news = []; // array to store news items
var newsHTML = ""; // string to store HTML for news items

// Grab news items from news.html
$.get("news.html", function(data) {
    // Split news items into array
    news = data.split("<p class=\"newsitem\">");
    // Remove first element of array (empty string)
    news.shift();
    // Remove last element of array (empty string)
    news.pop();
    // // Reverse array so that most recent news items are first
    // news.reverse();
    // Loop through news items and add them to newsHTML string
    for (var i = 0; i < numNews; i++) {
        newsHTML += "<p class=\"newsitem\">" + news[i];
    }
    // Add newsHTML string to news div
    $("#news").html(newsHTML);
});