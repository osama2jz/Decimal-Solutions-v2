import { Carousel } from "@mantine/carousel";
import { Box, Skeleton, Title, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useStyles } from "./styles";
import axios from "axios";
import { backendUrl } from "../../constants";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([{}, {}, {}]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/services").then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.purple} fw={400}>
        OUR SERVICES
      </Title>
      <Title order={4} align="center" fw={200}>
        View Some Of Our Services
      </Title>
      <Carousel
        slideSize="50%"
        mt="xl"
        loop
        styles={{
          control: { backgroundColor: theme.colors.purple, color: "white" },
        }}
        align="start"
        breakpoints={[
          { minWidth: "lg", slideSize: "33.33%", slideGap: 0 },
          { minWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {services.map((obj, ind) => {
          return (
            <Carousel.Slide
              key={ind}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {isLoading ? (
                <Skeleton w={250} h={250} ml="50px" />
              ) : (
                <ServiceCard
                  title={obj?.title}
                  onClick={() => navigate("/services")}
                  picture={obj?.homeImage}
                  description={obj?.shortDescription}
                />
              )}
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Services;
