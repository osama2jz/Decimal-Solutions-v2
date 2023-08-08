import {
  Box,
  Button,
  Group,
  Loader,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Carousel } from "@mantine/carousel";
import ServiceCard from "../home/ServiceCard";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [filter, setFilter] = useState("all");
  const [porfolioData, setPorfolioData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + `/api/v1/web/services`).then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/groupedprojects").then((res) => {
      setPorfolioData(res.data.data);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if (filter === "all") setFilteredData(porfolioData);
    else {
      let filtered = porfolioData.filter((obj) => {
        return obj.category === filter;
      });
      setFilteredData(filtered);
    }
  }, [filter, porfolioData]);
  return (
    <Box style={{ textAlign: "center" }}>
      <Box className={classes.heading}>
        <Title color="white">OUR PORTFOLIO</Title>
      </Box>
      <Group position="center" mt="50px">
        <Button
          style={{
            backgroundColor: filter === "all" ? theme.colors.purple : "white",
            color: filter === "all" ? "white" : "black",
            border: "1px solid purple",
          }}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        {services.map((obj, ind) => {
          return (
            <Button
              key={ind}
              style={{
                backgroundColor:
                  filter === obj?.title ? theme.colors.purple : "white",
                color: filter === obj?.title ? "white" : "black",
                border: "1px solid purple",
              }}
              onClick={() => setFilter(obj?.title)}
            >
              {obj?.title}
            </Button>
          );
        })}
      </Group>
      {isLoading ? (
        <Loader
          size={"xl"}
          color={theme.colors.purple}
          style={{ marginBlock: "100px" }}
        />
      ) : (
        <Box p={isMobile ? "10px" : "100px"}>
          {filteredData.length ? (
            filteredData?.map((portfolio, index) => {
              return (
                <Box key={index} mb="50px">
                  <Title align="center" color={theme.colors.purple} fw={400}>
                    {portfolio?.category}
                  </Title>
                  <Carousel
                    slideSize="33.333333%"
                    mt="xl"
                    loop
                    styles={{
                      control: {
                        backgroundColor: theme.colors.purple,
                        color: "white",
                      },
                    }}
                    align="start"
                    breakpoints={[
                      { maxWidth: "md", slideSize: "50%" },
                      { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
                    ]}
                  >
                    {portfolio?.projects?.map((card, index) => {
                      return (
                        <Carousel.Slide
                          key={index}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <ServiceCard
                            title={card?.title}
                            description={card?.shortDescription}
                            picture={card?.coverImage}
                            onClick={() =>
                              navigate("/project-detail", {
                                state: {
                                  project: card,
                                  category: portfolio?.category,
                                },
                              })
                            }
                          />
                        </Carousel.Slide>
                      );
                    })}
                  </Carousel>
                </Box>
              );
            })
          ) : (
            <Title color="gray">No Project Found.</Title>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Portfolio;
