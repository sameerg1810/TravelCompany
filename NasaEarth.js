import React, { useState } from "react";
import axios from "axios";

const EarthImage = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState({});

  const handleLongitude = (e) => {
    setLongitude(e.target.value);
  };

  const handleLatitude = (e) => {
    setLatitude(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&dim=0.15&api_key=87RTHOQdzFqWlvgV8Lydtdw4KuaenjydbfXtfO1C`
      )
      .then((response) => {
        setImageData(response.data);
      });
  };

  return (
    <div>
      <div className="card container-fluid">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={longitude}
            onChange={handleLongitude}
            placeholder="Enter Longitude"
          />
          <input
            type="text"
            value={latitude}
            onChange={handleLatitude}
            placeholder="Enter Latitude"
          />
          <input
            type="text"
            value={date}
            onChange={handleDate}
            placeholder="Enter Date (yyyy-mm-dd)"
          />
          <button type="submit">Search</button>
        </form>
        {Object.keys(imageData).length !== 0 && (
          <div>
            <h2>Earth Image</h2>
            <div className="card">
              {Object.entries(imageData).map(([key, value]) => (
                <p key={key}>
                  <b>{key}:</b> {value}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarthImage;
