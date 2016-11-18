var request = new XMLHttpRequest();
var fortnights;
request.open("GET", "fortnights.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var fortnights = JSON.parse(request.responseText);
    alert (fortnights.fortnights[0].name);
  }
}
