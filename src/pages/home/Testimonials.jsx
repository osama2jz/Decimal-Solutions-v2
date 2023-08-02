import {
  Avatar,
  Box,
  Image,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const Testimonials = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { classes } = useStyles();
  const [data, setData] = useState([{}, {}]);
  return (
    <Box className={classes.test}>
      <Title align="center" color={theme.colors.purple} fw={400} pt="50px">
        Testimonials
      </Title>
      <Title order={4} align="center" fw={200}>
        What do our clients say
      </Title>
      <Carousel withIndicators>
        {data.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <Box className={classes.testSub}>
                <Avatar
                  src={null}
                  size={"180px"}
                  radius={"lg"}
                  style={{
                    borderWidth: "4px",
                    borderStyle: "solid",
                    borderColor: theme.colors.purple,
                  }}
                />
                <Text fz={"20px"} fw="bold">
                  Muhammad Usama
                </Text>
                <Text color={theme.colors.purple}>Software Dev</Text>
                <Text mt="lg" fz={isMobile ? "md" : "xl"} align="center">
                  " This is a review. This is a review. This is a review.This is
                  a review. This is a review. This is a review. This is a
                  review. "
                </Text>
              </Box>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
