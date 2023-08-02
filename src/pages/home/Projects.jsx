import { Carousel } from "@mantine/carousel";
import { Box, Title, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useStyles } from "./styles";

const Projects = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [cat, setCat] = useState([{}, {}, {}]);
  // useEffect(() => {
  //   axios
  //     .get(backendUrl + "/category/get_all")
  //     .then((res) => setCat(res.data.data));
  // }, []);
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.purple} fw={400}>
        OUR PROJECTS
      </Title>
      <Title order={4} align="center" fw={200}>
        Some Latest Client Projects
      </Title>
      <Carousel
        slideSize="33.333333%"
        slideGap="md"
        mt="xl"
        loop
        styles={{
          control: { backgroundColor: theme.colors.purple, color: "white" },
        }}
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {cat.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <ServiceCard title={obj?.name} description={obj?.description} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Projects;
