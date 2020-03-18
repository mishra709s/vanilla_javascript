// Createing DOM elements.
const app = document.querySelector("#root");
const logo = document.createElement("img");
logo.src = "logo.png";
logo.alt = "Studio Ghilbi Logo";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

// Create a new variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint.
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  // Begin accessing JSON data
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // Log each movie's name
      //console.log(movie.title);

      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300); // Limit of 300 chars
      p.textContent = `${movie.description}...`;

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and p
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errMessage = document.createElement("marquee");
    app.appendChild(errMessage);
    errMessage.textContent = "Gah, It's not working";
  }
};

// Send Request
request.send();
