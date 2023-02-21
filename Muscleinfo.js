import React, { useState, useEffect } from "react";
import Muscle from "../images/Muscle.jpg";

function Muscleinfo() {
  const [muscle, setMuscle] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": "cZS1pdT+AtLFd8C14OT8lQ==r3ahnvMI0QwTdySW",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={muscle}
        onChange={(e) => setMuscle(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occurred: {error.message}</p>
      ) : (
        <div id="results">
          ...
          {data &&
            data.map((exercise, index) => (
              <div
                className="card mb-3 bg-light w-25 container-fluid"
                key={index}
              >
                <div className="card-body text-dark">
                  <img
                    src={Muscle}
                    className="card-img-top w-25"
                    alt="Muscle"
                  />
                  <p>
                    <b>Name:</b> {exercise.name}
                  </p>
                  <p>
                    <b>Type:</b> {exercise.type}
                  </p>
                  <p>
                    <b>Muscle:</b> {exercise.muscle}
                  </p>
                  <p>
                    <b>Equipment:</b> {exercise.equipment}
                  </p>
                  <p>
                    <b>Difficulty:</b> {exercise.difficulty}
                  </p>
                  <p>
                    <b>Instructions:</b> {exercise.instructions}
                  </p>
                </div>
              </div>
            ))}
          ...
        </div>
      )}
    </div>
  );
}

export default Muscleinfo;
