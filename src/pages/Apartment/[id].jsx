import { useParams } from "react-router-dom";
import datas from "../../assets/data.json";
import Error from "../[...all]";
import "./[id].scss";
import Tags from "../../components/Tags";

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
        <div>
          <div className="ownerDetails">
            <div>
              <p>{selection.hôte.nom.split(" ")[0]}</p>
              <p>{selection.hôte.nom.split(" ")[1]}</p>
            </div>
            <img src={selection.hôte.photo} alt="profil" />
          </div>
          <div>stars</div>
        </div>
      </div>
      <div>DESCRIPTION</div>
      <div>EQUIPEMENT</div>
    </>
  );
};

export default Id;
