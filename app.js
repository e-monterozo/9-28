    
function GetSelectedValue(countrySelected){
	var countryCode = countrySelected;
    var API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=';
    var API_KEY = '039f7856be7344a3b258da0d4e2a1141&country=';
    var url = API_URL+API_KEY+countryCode;



    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Checkout this JSON! ', out);

        var nums = document.getElementById("list");
        var listItem = nums.getElementsByTagName("li");

        for (var i in out.articles) {
        var output = "TITLE: " + out.articles[i].title + 
        " AUTHOR: " + out.articles[i].author + 
        " DESCRIPTION: " + out.articles[i].description;

        var li = listItem[i];

        var node = document.createElement("LI"); 
        var textnode = document.createTextNode(output);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        }
    })
    .catch(err => { throw err });
        

    
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('list');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    //alert(target.innerHTML);
    target.innerHTML = '';
};