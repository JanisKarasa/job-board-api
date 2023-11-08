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
    // parse data into JS OBJECT
    let data = JSON.parse(xhttp.responseText);
    let container = document.getElementById("container");
    // looping through rows of the data object and index of the rows to extract data from each row in forEach (could be also for loop) to create HTML elements with that
    // use slice(1) (from 1 through the end) to cut out first row that is some legal information
    data.slice(1).forEach(function (row, i) {
      // creating a div
      let rowDiv = document.createElement("div");
      // and giving a class name 'row'
      rowDiv.classList.add("row");
      // setting the inner HTML to be more HTML elements by creating as a string
      rowDiv.innerHTML = `
      <div class="left-section">
        <h5 class="company">${row.company}</h5>
        <h3 class="position">${row.position}</h3>
        <p class="location">${row.location}</p>
      </div>
      <div class="mid-section">
        ${row.tags
          .map(function (tag) {
            // for each tag we do function that returns tag in sub-string
            return `<div class="tag">${tag}</div>`;
          })
          .join("")}
      </div>
      <div class="right-section">
        <a href=${row.url}>
          <button class="apply-button">Apply</button>
        </a>
      </div>
      `;
      container.appendChild(rowDiv);
    });
  }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();
