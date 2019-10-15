function searchEverything(searchTerm) {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=2019-09-30&sortBy=publishedAt&apiKey=${config.API_Key}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}
function searchTopHeadline(searchTerm) {
    fetch(`https://newsapi.org/v2/top-headlines?q=${searchTerm}&from=2019-09-30&sortBy=publishedAt&apiKey=${config.API_Key}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    let resultsHeader = document.getElementById('resultsHeader');
    let totalResults = document.getElementById('totalResults');
    let resultsInfo = "<div>"
    let title = document.getElementById('title');
    let sourceName = document.getElementById('sourceName');
    let author = document.getElementById('author');
    let publishedAt = document.getElementById('publishedAt')
    let urlImage = document.getElementById('urlImage');
    let articles

    totalResults.innerHTML = resultFromServer.totalResults + " search results";
    articles = resultFromServer.articles;
    for (var i = 0; i < articles.length; i++) {
        resultsInfo += "<div class='resultsContent'>" + "<h1 class='title'>" + "<a href='" + articles[i].url + "'>" + articles[i].title + "</a>" + "</h1>" + "<span class='sourceName'>" + articles[i].source.name + "</span>" + "<span class='author'>" + articles[i].author + "</span>" + "<span class='publishedAt'>" + articles[i].publishedAt + "</span>" + "<img class='urlImage' src='" + articles[i].urlToImage + "'>" + "</div>"
    }
    document.getElementById("resultsInfo").innerHTML = resultsInfo;
}

document.getElementById('searchEverythingButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchEverything(searchTerm);
})

document.getElementById('searchTopHeadlineButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchTopHeadline(searchTerm);
})