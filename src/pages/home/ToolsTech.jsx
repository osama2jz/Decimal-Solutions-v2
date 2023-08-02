import { Box, Image, Title, useMantineTheme } from "@mantine/core";
import React, { useRef } from "react";
import { useStyles } from "./styles";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const ToolsTech = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  let tools = [
    "angular.png",
    "aspnet.png",
    "chash.png",
    "cplusplus.png",
    "djnago.png",
    "express.png",
    "graphql.png",
    "microsoftsql.png",
    "mongo.png",
    "nextjs.webp",
    "node.png",
    "python.png",
    "react.png",
    "reactNative.png",
    "sel.jpg",
    "unity.png",
    "vue.png",
    "wordpress.png",
  ];
  return (
    <Box className={classes.toolsTech}>
      <Title align="center" color={theme.colors.purple} fw={400}>
        Tools & Technologies
      </Title>
      <Title order={4} align="center" fw={200}>
        Our Working Technologies
      </Title>
      <Carousel
        loop
        height={200}
        slideSize="33.333333%"
        styles={{
          control: { backgroundColor: theme.colors.purple, color: "white" },
        }}
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {tools.map((item, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <Image
                src={new URL(`../../assets/${item}`, import.meta.url).href}
                fit="fill"
                width={"70%"}
                h={200}
                alt={item}
                style={{
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ToolsTech;
