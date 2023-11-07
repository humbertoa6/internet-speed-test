import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const PlacesList = () => {
  console.log('TT')
  const [loading, setloading] = useState(true);
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    const apiEndpoint = '/api/places';
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLoadedPlaces(data);
        setloading(false);
      })
  }, [])

  const loadingSection = (<div>Loading...</div>)
  const dataSection = loadedPlaces.map((place, index) => (
    <div key={index}>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Recent Upload Speed</th>
            <th>Recent Upload Speed Units</th>
            <th>Number of measurements</th>
          </tr>
          <tr key={index}>
            <td>{place.name}</td>
            <td>{place.city}</td>
            <td>{place.recent_upload_speed}</td>
            <td>{place.recent_upload_speed_units}</td>
            <td>{place.number_of_measurements}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))

  if (loading) {
    return loadingSection
  } else {
    return dataSection
  }
};


export default PlacesList;
