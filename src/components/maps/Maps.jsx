import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import parkDate from "./data";
import styled from "styled-components";
export default function App() {
  // console.log(parkDate);
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "80vw",
    height: "80vh",
    zoom: 12,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <Mapcontainer>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiZ291cmFiMTgiLCJhIjoiY2t5NjFrMWgyMHJkNTJ3cHZuMDgwanYxcCJ9.6ES3Q-CSxBLIv4YC2kl7hA"
          // mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"

          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {parkDate.features.map((park) => (
            <Marker
              key={park.properties.PARK_ID}
              latitude={park.geometry.coordinates[1]}
              longitude={park.geometry.coordinates[0]}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              >
                <Symbol>
                  <img
                    src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg"
                    alt="Skate Park Icon"
                  />
                </Symbol>
              </button>
            </Marker>
          ))}

          {selectedPark ? (
            <Popup
              latitude={selectedPark.geometry.coordinates[1]}
              longitude={selectedPark.geometry.coordinates[0]}
              onClose={() => {
                setSelectedPark(null);
              }}
            >
              <div>
                <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </Mapcontainer>
    </div>
  );
}

const Symbol = styled.div`
  > img {
    height: 40px;
    width: 40px;
    border-radius: 2rem;
  }
`;

const Mapcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
