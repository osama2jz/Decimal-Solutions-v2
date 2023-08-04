import { Carousel } from "@mantine/carousel";
import { Box, Image } from "@mantine/core";
import img1 from "../../assets/banner.jpg";
import Services from "./Services";
import Acheivements from "./Acheivements";
import Projects from "./Projects";
import { useMediaQuery } from "@mantine/hooks";
import WhyChooseUs from "./WhyChooseUs";
import ToolsTech from "./ToolsTech";
import Testimonials from "./Testimonials";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Box>
      <Carousel withIndicators height={isMobile ? 250 : 500}>
        <Carousel.Slide>
          <Image src={img1} fit="contain" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={img1} fit="cover" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={img1} fit="cover" />
        </Carousel.Slide>
      </Carousel>
      <Services />
      <Acheivements />
      <Projects />
      <WhyChooseUs />
      <ToolsTech />
      <Testimonials />
    </Box>
  );
};

export default Home;
