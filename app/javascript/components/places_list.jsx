import React, { useEffect, useState } from "react";

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

  const loadingSection = (<div>Loading...</div>);
  const dataSection = (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    City
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Recent Upload Speed
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Recent Upload Speed Units
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Number of measurements
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {loadedPlaces.map((place, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {place.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{place.city}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{place.recent_upload_speed}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{place.recent_upload_speed_units}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{place.number_of_measurements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return loading ? loadingSection : dataSection;
};

export default PlacesList;
