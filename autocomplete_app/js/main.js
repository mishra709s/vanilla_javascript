const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch('../data/states.json');
  const states = await res.json();

  // console.log(states);
  // get matches to current text input (it will change every time we will type something.)
  let matches = states.filter(state => {
    // gi = global, case insensitive
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  // if we clear the input we get the entire json object, to over come that we need this condition
  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }

  outputHtml(matches);
};

// show results in HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class="card card-body mb-1">
        <h4>${match.name}(${match.abbr})<span class="text-primary">${match.capital}</span>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
        </h4>
      </div>    
    `).join('');
    matchList.innerHTML = html;
  }
};

search.addEventListener('input', () => searchStates(search.value));