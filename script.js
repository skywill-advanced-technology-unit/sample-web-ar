window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "Magnemite",
      location: {
        lat: 41.892590,
        lng: 12.489820,
      },
    },
    {
      name: "test",
      location: {
        lat: 43.49647,
        lng: 10.32018,
      },
    },
    {
      name: "Mtesagnemitdddde",
      location: {
        lat: 44.49647,
        lng: 11.32018,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;
    console.log("-------");
    console.log(latitude);
    console.log(longitude);

    let model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model.setAttribute("rotation", "0 180 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.5 0.5 0.5");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
