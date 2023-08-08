import { Anchor, Box, Divider, Flex, Text } from "@mantine/core";
import { useStyles } from "./styles";
import fb from "../../assets/facebook-white.svg";
import ig from "../../assets/instagram-white.svg";
import lk from "../../assets/linkedin-white.svg";
import yt from "../../assets/youtube-white.svg";
import { useContext } from "react";
import { Context } from "../../context/context";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { aboutUs: data } = useContext(Context);
  return (
    <Box className={classes.footer}>
      <Text fw={"bold"}>Contact Us</Text>
      <Text fz={isMobile ? "md" : "lg"}>{data?.primaryContact}</Text>
      <Text fz={isMobile ? "md" : "lg"}>{data?.primaryEmail}</Text>
      <Text fz={isMobile ? "md" : "lg"}>{data?.primaryAddress}</Text>
      <Flex gap={"xl"} align={"center"}>
        <Anchor className={classes.icon} href={data?.facebook} target="_blank">
          <img src={fb} width={"30px"} />
        </Anchor>
        <Anchor className={classes.icon} href={data?.instagram} target="_blank">
          <img src={ig} width={"30px"} />
        </Anchor>
        <Anchor className={classes.icon} href={data?.youtube} target="_blank">
          <img src={yt} width={"30px"} />
        </Anchor>
        <Anchor className={classes.icon} href={data?.linkedIn} target="_blank">
          <img src={lk} width={"30px"} className={classes.icon} />
        </Anchor>
      </Flex>
      <Divider w="100%" />
      <Text align="center" fz={"md"}>
        {new Date().getFullYear()} Decimal Solutions. All Rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
