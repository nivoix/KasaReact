import Banner from "../components/Banner";
import imageBannerHome from "../assets/ImageBannerHome.png";

const Index = () => {
  return (
    <>
      <Banner
        imageURL={imageBannerHome}
        title="Chez vous, partout et ailleurs"
      />
    </>
  );
};

export default Index;
