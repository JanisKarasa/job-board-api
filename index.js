/*
Standard process to load the data on the page:
    1. Send an AJAX request to this API url - https://remoteok.com/api
    2. Test that request to make sure it worked
    3. Use the data to create HTML
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("container").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();
