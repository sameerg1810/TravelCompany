import React, { useState, useEffect, useMemo } from "react";
import Flight from "../images/Flight.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const FlightApi = () => {
  const [data, setData] = useState({});

  useMemo();
  useEffect(() => {
    fetch(
      "https://airlabs.co/api/v9/airlines?iata_code=AA&api_key=a10123d8-7a80-4176-82e8-3ae4c155b957"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.response[0]);
      })
      .catch((error) => console.error(error));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div>
        <button onClick={() => navigate("/Home")}>Home page</button>
      </div>
      <div className="card container-fluid" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <img src={Flight} className="card-img-top" alt="Flight" />
          <p className="card-text">
            <strong>IATA Code:</strong> {data.iata_code}
          </p>
          <p className="card-text">
            <strong>IATA Prefix:</strong> {data.iata_prefix}
          </p>
          <p className="card-text">
            <strong>ICAO Code:</strong> {data.icao_code}
          </p>
          <p className="card-text">
            <strong>Country Code:</strong> {data.country_code}
          </p>
          <p className="card-text">
            <strong>iosa_registered:</strong> {data.iosa_registered}
          </p>
          <p className="card-text">
            <strong>is_passenger:</strong> {data.is_passenger}
          </p>
          <p className="card-text">
            <strong>is_cargo:</strong> {data.is_cargo}
          </p>
          <p className="card-text">
            <strong>is_international:</strong> {data.is_international}
          </p>
          <p className="card-text">
            <strong>total_aircrafts:</strong> {data.total_aircrafts}
          </p>
          <p className="card-text">
            <strong>average_fleet_age:</strong> {data.average_fleet_age}
          </p>
          <p className="card-text">
            <strong>accidents_last_5y:</strong> {data.accidents_last_5y}
          </p>
          <p className="card-text">
            <strong>crashes_last_5y:</strong> {data.crashes_last_5y}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightApi;
