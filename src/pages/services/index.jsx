import {
  Box,
  Divider,
  Image,
  Loader,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import plant from "../../assets/plant.jpg";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { backendUrl } from "../../constants";

const Services = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 800px)");
  const [services, setServices] = useState([{}, {}, {}]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/services").then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR SERVICES</Title>
      </Box>
      {isLoading ? (
        <Loader
          color={theme.colors.purple}
          style={{ display: "flex", margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        services.map((obj, ind) => {
          return (
            <Box className={classes.service} key={ind}>
              {ind % 2 !== 0 && (
                <img src={obj?.coverImage} width="40%" height="100%" />
              )}
              <Stack
                spacing={"xl"}
                align={ind % 2 == 0 ? "flex-start" : "flex-end"}
                className={classes.stac}
              >
                <Divider w={"20%"} size={"lg"} color={theme.colors.purple} />
                <Title>{obj?.title}</Title>
                <Text fz={"lg"} align="justify">
                  {obj?.description}
                </Text>
              </Stack>
              {ind % 2 == 0 && (
                <img src={obj?.coverImage} width="40%" height="100%" />
              )}
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default Services;
