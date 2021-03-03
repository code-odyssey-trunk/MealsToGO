import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  const livehost =
    "https://us-central1-mealstogo-1a733.cloudfunctions.net/geocode?city=" +
    searchTerm;

  return fetch(livehost).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
