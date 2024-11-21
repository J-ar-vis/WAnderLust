mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with MapboxStudio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: listing.geometry.coordinates, // starting position [Ing, lat] zoom: 9 // starting
  zoom: 9,
});

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(mapboxgl.Popup({ offset: 25 }).setHTML(`<h4>${listing.title}</h4><p>exact location provided after booking</p>`))
  .addTo(map);
