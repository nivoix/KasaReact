import ApartmentCard from "./ApartmentCard";
import "./ApartmentGrid.scss";

const ApartmentGrid = () => {
  return (
    <div className="apartmentGrid">
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
    </div>
  );
};

export default ApartmentGrid;
