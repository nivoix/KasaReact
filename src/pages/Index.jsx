import Banner from "../components/Banner";
import imageBannerHome from "../assets/ImageBannerHome.png";
import ApartmentGrid from "../components/ApartmentGrid";

const Index = () => {
  return (
    <>
      <Banner
        imageURL={imageBannerHome}
        title1="Chez vous,"
        title2="partout et ailleurs"
      />
      <ApartmentGrid />
    </>
  );
};

export default Index;
