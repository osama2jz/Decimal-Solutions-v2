import {
  Box,
  Button,
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

const Products = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [products, setProducts] = useState([{}, {}, {}]);

  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR Products</Title>
      </Box>
      {products.map((obj, ind) => {
        return (
          <Box className={classes.service} key={ind}>
            {ind % 2 !== 0 && <img src={plant} width="40%" height="100%" />}
            <Stack
              spacing={"xl"}
              align={ind % 2 == 0 ? "flex-start" : "flex-end"}
              className={classes.stac}
            >
              <Divider w={"20%"} size={"lg"} color={theme.colors.purple} />
              <Title>DOCTOR & PATIENT SYSTEM</Title>
              <Text fz={"lg"} align="justify">
                My Virtual Doctor connects Doctors and Patients from all over
                the world via Call and Message. The Admin can manage system
                using Web Application and Doctor and Patient use this
                application using Mobile App. It has two different modes 1-
                Emergency Mode: Client tap on Emergency Mode Icon and he/she
                will automatically get a Doctor from whom he/she can take
                immediate assistance, It will be on call. This call will charge
                Fixed Amount. There will be free doctors in that as well, who
                are giving there time for Charity and Humanity. 2- Consultation
                Mode: The client tap on Consultation Mode Icon and he/she will
                see a list of Doctors and their initial consultation fee for
                Chat. The client can apply filters on the result to get the
                desired doctor. In consultation, the patient can request a
                Doctor to make Call, which will charge the Patient according to
                Doctor's fee.
              </Text>
              <Button bg={theme.colors.purple}>View Demo</Button>
            </Stack>
            {ind % 2 == 0 && <img src={plant} width="40%" height="100%" />}
          </Box>
        );
      })}
    </Box>
  );
};

export default Products;
