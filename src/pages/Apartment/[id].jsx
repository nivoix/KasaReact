import { useParams } from "react-router-dom";
import datas from "../../assets/data.json";
import Error from "../[...all]";
import "./[id].scss";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import Collapse from "../../components/Collapse";

const Id = () => {
  const { id } = useParams();

  const apartmentSelected = datas.some((data) => data.id === id);
  if (!apartmentSelected) return <Error />;

  const selection = datas.find((data) => data.id === id);

  return (
    <>
      <div>
        <img
          className="apartmentCarroussel"
          src={selection.cover}
          alt="Apartment photo"
        />
      </div>
      <div className="apartmentDetails">
        <div className="apartmentInfos">
          <h1 className="apartmentTitle">{selection.title}</h1>
          <h2 className="apartmentLocation">{selection.location}</h2>
          <div className="apartmentTags">
            <Tags tags={selection.tags} />
          </div>
        </div>
        <div className="owner">
          <div className="ownerDetails">
            <div className="ownerName">
              <p>{selection.hôte.nom.split(" ")[0]}</p>
              <p>{selection.hôte.nom.split(" ")[1]}</p>
            </div>
            <img src={selection.hôte.photo} alt="profil" />
          </div>
          <Stars rating={selection.note} />
        </div>
      </div>
      <div className="collapse">
        <Collapse title="Description" text={selection.description} />
        <Collapse
          title="Equipements"
          text={selection.equipements.map((equip, index) => (
            <ul key={index}>{equip}</ul>
          ))}
        />
      </div>
    </>
  );
};

export default Id;
