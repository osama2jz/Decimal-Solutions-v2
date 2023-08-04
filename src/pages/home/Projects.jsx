import { Carousel } from "@mantine/carousel";
import { Box, Skeleton, Title, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useStyles } from "./styles";
import axios from "axios";
import { backendUrl } from "../../constants";

const Projects = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + `/api/v1/web/homeScreenProjects/all`).then((res) => {
      setProjectData(res.data.data);
      setIsLoading(false);
    });
  }, []);
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
        {projectData.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              {isLoading ? (
                <Skeleton w={250} h={250} ml="50px" />
              ) : (
                <ServiceCard
                  title={obj?.title}
                  description={obj?.shortDescription}
                  picture={obj?.coverImage}
                />
              )}
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Projects;
