function GetSelectedValue(countrySelected){
	var countryCode = countrySelected;
    var API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=';
    var API_KEY = '039f7856be7344a3b258da0d4e2a1141&country=';
    var url = API_URL+API_KEY+countryCode;



    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Checkout this JSON! ', out);
        //var obj = JSON.parse(out);
        var i = 0;
        for(i = 0; i<20; i++ ) {
        var result = out.articles[i].urlToImage + ", " + out.articles[i].title + ", " + out.articles[i].author + ", " + out.articles[i].description + ", " + out.articles[i].url;
        document.getElementById("ct").appendChild = out;
        }
    })
    .catch(err => { throw err });
        

    
}
