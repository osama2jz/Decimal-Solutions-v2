import { Box, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import why from "../../assets/why.png";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

const WhyChooseUs = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1150px)");

  return (
    <Box className={classes.whyUs}>
      <Title align="center" color={theme.colors.purple} fw={400}>
        Why Choose Us
      </Title>
      <Title order={4} align="center" fw={200}>
        Our Working Process
      </Title>
      <Box className={classes.whyUsSub}>
        {!isMobile && <img src={why} width={"45%"} />}
        <Box w={isMobile ? "95%" : "50%"} style={{ position: "relative" }}>
          <Box className={classes.whywhy}>
            <Text fw="bold">Product Analysis</Text>
            <Text fz="13px">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </Text>
          </Box>
          <Box className={classes.whywhy}>
            <Text fw="bold">Wireframe or UI/UX Design</Text>
            <Text fz="13px">
              We suggest the solution or modifications to your product by
              employing UI/UX design to make it interactive and creative.
            </Text>
          </Box>
          <Box className={classes.whywhy}>
            <Text fw="bold">Product Development</Text>
            <Text fz="13px">
              We develop a high-quality software product according to your
              desire which compliments your business well.
            </Text>
          </Box>
          <Box className={classes.whywhy}>
            <Text fw="bold">Product Testing</Text>
            <Text fz="13px">
              Our team performs strict product testing to ensure reliability,
              quality, cost-effectiveness, and product life expectancy while
              reducing customers’ aftercare needs.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
