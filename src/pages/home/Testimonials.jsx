import {
  Avatar,
  Box,
  Image,
  Loader,
  Skeleton,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { backendUrl } from "../../constants";

const Testimonials = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { classes } = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/api/v1/web/testimonial").then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box className={classes.test}>
      <Title align="center" color={theme.colors.purple} fw={400} pt="50px">
        Testimonials
      </Title>
      <Title order={4} align="center" fw={200}>
        What do our clients say
      </Title>
      <Carousel withIndicators styles={{indicator:{backgroundColor:theme.colors.purple}}}>
        {data.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <Box className={classes.testSub}>
                {loading ? (
                  <>
                    <Skeleton w={180} h={180} />
                    <Skeleton w={150} h={10} />
                    <Skeleton w={150} h={10} />
                    <Loader color={theme.colors.purple} />
                    <Skeleton w={350} h={10} mt={"20px"}/>
                    <Skeleton w={350} h={10}/>
                  </>
                ) : (
                  <>
                    <Avatar
                      src={obj?.image}
                      size={"180px"}
                      radius={"lg"}
                      style={{
                        borderWidth: "4px",
                        borderStyle: "solid",
                        borderColor: theme.colors.purple,
                      }}
                    />
                    <Text fz={"20px"} fw="bold">
                      {obj?.name}
                    </Text>
                    <Text color={theme.colors.purple}>{obj?.designation}</Text>
                    <Text mt="lg" fz={isMobile ? "md" : "xl"} align="center">
                      "{obj?.testimonial}"
                    </Text>
                  </>
                )}
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
