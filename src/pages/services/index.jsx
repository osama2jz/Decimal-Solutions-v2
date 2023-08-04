import {
  Box,
  Divider,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import plant from "../../assets/plant.jpg";
import { useMediaQuery } from "@mantine/hooks";

const Services = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [services, setServices] = useState([{}, {}, {}]);

  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR SERVICES</Title>
      </Box>
      {services.map((obj, ind) => {
        return (
          <Box className={classes.service} key={ind}>
            {ind % 2 !== 0 && <img src={plant} width="40%" height="100%" />}
            <Stack
              spacing={"xl"}
              align={ind % 2 == 0 ? "flex-start" : "flex-end"}
              className={classes.stac}
            >
              <Divider w={"20%"} size={"lg"} color={theme.colors.purple} />
              <Title>AR/VR GAMES</Title>
              <Text fz={"lg"}>
                AR and VR are the next big thing! We are here to help you stay
                ahead in race with advanced AR and VR Development services, our
                developers create AR and VR apps for iPad, iPhone, Android and
                Windows. By combining technology and creativity we create new
                spaces and unique experiences for and with you.
              </Text>
            </Stack>
            {ind % 2 == 0 && <img src={plant} width="40%" height="100%" />}
          </Box>
        );
      })}
    </Box>
  );
};

export default Services;
