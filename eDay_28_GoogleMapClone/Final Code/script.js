// API Key Or Access Key

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29tc3ViaHJhMSIsImEiOiJja2hkbDhuNGcwNnZnMnNuMGkwcjU3d3UwIn0.ZAeP5aPO4JkxNGD7dIEZtw";

// Map SetUp

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 12,
    center,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
};

// Setting Location

const errorLocation = () => {
  setupMap([-2.24, 53.48]);
};

const successLocation = (position) => {
  setupMap([position.coords.longitude, position.coords.latitude]);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
