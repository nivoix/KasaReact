import { useParams } from "react-router-dom";

const Id = () => {
  const { id } = useParams();
  return <div>Apartement Page ID : {id}</div>;
};

export default Id;
