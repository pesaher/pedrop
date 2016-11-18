var request = new XMLHttpRequest();
request.open("GET", "fortnights.json", false);
request.send(null)
var fortnights = JSON.parse(request.responseText);
alert (fortnights.fortnights[0].name);
