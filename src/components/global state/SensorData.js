export default function SensorData() {
  var SearchAPIURL = "http://localhost/fyp/temp.php";

  fetch(SearchAPIURL)
    .then((response) => response.json())
    .then((data) => console.table("fetch data is ", data))
    .catch((error) => {
      alert("Error" + error);
    });
}

setInterval(SensorData, 1000);
