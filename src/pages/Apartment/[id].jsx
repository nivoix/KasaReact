import { useParams } from "react-router-dom";
import datas from "../../assets/data.json";
import Error from "../[...all]";

const Id = () => {
  const { id } = useParams();

  const apartmentSelected = datas.some((data) => data.id === id);
  if (!apartmentSelected) return <Error />;

  const selection = datas.find((data) => data.id === id);

  return (
    <>
      <div>
        <img src={selection.cover} alt="Apartment photo" />
      </div>
      <div>
        <div>
          <h1>{selection.title}</h1>
          <h2>{selection.location}</h2>
          <div>tags</div>
        </div>
        <div>
          <div>
            <div>
              <p>{selection.hôte.nom.split(" ")[0]}</p>
              <p>{selection.hôte.nom.split(" ")[1]}</p>
            </div>
            <img src={selection.hôte.photo} alt="" />
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
