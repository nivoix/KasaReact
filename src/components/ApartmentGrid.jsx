import React from "react";
import ApartmentCard from "./ApartmentCard";
import "./ApartmentGrid.scss";
import data from "../assets/data.json";
import Loader from "../components/Loader";

const ApartmentGrid = () => {
  return (
    <>
      {data.length < 1 && <Loader />}
      <div className="apartmentGrid">
        {data.map((datappt) => (
          <ApartmentCard
            key={datappt.id}
            id={datappt.id}
            title={datappt.title}
            imageURL={datappt.cover}
          />
        ))}
      </div>
    </>
  );
};

export default ApartmentGrid;
