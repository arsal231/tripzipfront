var pickupLocation = JSON.parse(localStorage.getItem('pickup_location'));
var dropOffLocation = JSON.parse(localStorage.getItem('drop_off_location'));
var stop3 = (JSON.parse(localStorage.getItem('stop_3')) ? JSON.parse(localStorage.getItem('stop_3')) : '');
var stop4 = (JSON.parse(localStorage.getItem('stop_4')) ? JSON.parse(localStorage.getItem('stop_4')) : '');
var stop5 = (JSON.parse(localStorage.getItem('stop_5')) ? JSON.parse(localStorage.getItem('stop_5')) : '');
var stop6 = (JSON.parse(localStorage.getItem('stop_6')) ? JSON.parse(localStorage.getItem('stop_6')) : '');
var stop7 = (JSON.parse(localStorage.getItem('stop_7')) ? JSON.parse(localStorage.getItem('stop_7')) : '');
//alert('stop3'+stop3   + 'stop4'+stop4  + 'stop5'+stop5  +  'stop6'+stop6  +  'stop7'+stop7);
var stopsArray = [];
if (stop3 && stop3!=null) {
  stopsArray.push({ location: stop3, stopover: true });
}
if (stop4 && stop4!=null) {
  stopsArray.push({ location: stop4, stopover: true });
}
if (stop5 && stop5!=null) {
  stopsArray.push({ location: stop5, stopover: true });
}
if (stop6 && stop6!=null) {
  stopsArray.push({ location: stop6, stopover: true });
}
if (stop7 && stop7!=null) {
  stopsArray.push({ location: stop7, stopover: true });
}

console.log(stopsArray);

//  alert('pickupLocation'+pickupLocation);
//  alert('dropOffLocation'+dropOffLocation);
//  alert('stop3'+stop3);
//  alert('stop4'+stop4);
//  alert('stop5'+stop5);
//  alert('stop6'+stop6);
//  alert('stop7'+stop7);


function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), 
  {
    zoom: 6,
    center: { lat: 41.85, lng: -87.65 },
  });

  directionsRenderer.setMap(map);

  document.getElementById("submit").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const waypts = [];
  // const checkboxArray = document.getElementById("waypoints");

  // for (let i = 0; i < checkboxArray.length; i++) 
  // {
  //   if (checkboxArray.options[i].selected) 
  //   {
  //     waypts.push( {location: checkboxArray[i].value,stopover: true} );
  //   }
  // }

  directionsService
    .route({
      origin: pickupLocation,
      destination: dropOffLocation,
      waypoints: stopsArray,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);

      const route = response.routes[0];
      const summaryPanel = document.getElementById("directions-panel");

      summaryPanel.innerHTML = "";

      // For each route, display summary information.
      let totalDistance = 0;
      for (let i = 0; i < route.legs.length; i++) {
        const routeSegment = i + 1;

        summaryPanel.innerHTML +=
          "<b>Route Segment: " + routeSegment + "</b><br>";
        summaryPanel.innerHTML += route.legs[i].start_address + " to ";
        summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
        summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
        totalDistance += route.legs[i].distance.value;
      }
     // console.log(totalDistance);
      console.log(totalDistance/ 1000);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

window.initMap = initMap;