import {
  Box,
  Button,
  Divider,
  Loader,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import plant from "../../assets/plant.jpg";
import { backendUrl } from "../../constants";
import { useStyles } from "./styles";

const Products = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/products").then((res) => {
      setProducts(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR Products</Title>
      </Box>
      {isLoading ? (
        <Loader
          color={theme.colors.purple}
          style={{ display: "flex", margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        products.map((obj, ind) => {
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
                <Button
                  bg={theme.colors.purple}
                  onClick={() => window.open(obj?.link, "_blank")}
                >
                  View Demo
                </Button>
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

export default Products;
