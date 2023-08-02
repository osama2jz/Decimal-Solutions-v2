import { Box, Divider, Flex, Text } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import fb from "../../assets/facebook-white.svg";
import ig from "../../assets/instagram-white.svg";
import lk from "../../assets/linkedin-white.svg";
import yt from "../../assets/youtube-white.svg";

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.footer}>
      <Text>Contact Us</Text>
      <Text>+92 345 5893337</Text>
      <Text>info@decimalsolution.com</Text>
      <Text>
        Office No# 17, 2nd Floor, Zaki Centre, I-8 Markaz Islamabad, 44000
      </Text>
      <Flex gap={"xl"}>
        <img src={fb} width={"30px"} className={classes.icon} />
        <img src={ig} width={"30px"} className={classes.icon} />
        <img src={yt} width={"30px"} className={classes.icon} />
        <img src={lk} width={"30px"} className={classes.icon} />
      </Flex>
      <Divider w="100%" />
      <Text align="center" fz={"md"}>
        {new Date().getFullYear()} Decimal Solutions. All Rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
