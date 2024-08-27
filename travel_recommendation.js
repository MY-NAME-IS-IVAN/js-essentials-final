async function test() {

  const response = await fetch('./travel_recommendation_api.json');
  const json = await response.json();

  console.log(json)
}
