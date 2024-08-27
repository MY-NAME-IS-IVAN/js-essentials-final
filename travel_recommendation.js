async function search() {
  const response = await fetch('./travel_recommendation_api.json');
  const json = await response.json();

  const searchValue = document.getElementById('search').value.toLowerCase();
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  let array = [];
  let hasCities = false;

  if (searchValue == 'countries' || searchValue == 'country') {
    hasCities = true;
    array = json.countries;
  } else if (searchValue == 'temples' || searchValue == 'temple') {
    array = json.temples;
  } else if (searchValue == 'beaches' || searchValue == 'beach') {
    array = json.beaches;
  }

  if (hasCities) {
    for (let i = 0; i < array.length; i++) {
      const cities = array[i].cities;
      for (let j = 0; j < cities.length; j++) {
        const listItem = document.createElement('li');

        const image = document.createElement('img');
        image.setAttribute('src', cities[j].imageUrl);

        const title = document.createElement('h2');
        title.innerHTML = cities[j].name;

        const description = document.createElement('p');
        description.innerHTML = cities[j].description;

        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(description);

        resultsList.appendChild(listItem);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      const listItem = document.createElement('li');

      const image = document.createElement('img');
      image.setAttribute('src', array[i].imageUrl);

      const title = document.createElement('h2');
      title.innerHTML = array[i].name;

      const description = document.createElement('p');
      description.innerHTML = array[i].description;

      listItem.appendChild(image);
      listItem.appendChild(title);
      listItem.appendChild(description);

      resultsList.appendChild(listItem);
    }
  }
}

const clearBtn = document.getElementById('clearBtn');


clearBtn.onclick = () => {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';
}
