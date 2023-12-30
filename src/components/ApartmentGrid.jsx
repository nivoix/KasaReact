import React from "react";
import ApartmentCard from "./ApartmentCard";
import "./ApartmentGrid.scss";
import data from "../assets/data.json";

console.log(data);

const ApartmentGrid = () => {
  return (
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
  );
};

export default ApartmentGrid;
