import { Box, Image, Text, Title } from "@mantine/core";
import React from "react";
import img from "../../assets/service.svg";
import { useStyles } from "./styles";

const ServiceCard = ({ title, picture, link, onClick = null, description }) => {
  const { classes } = useStyles();
  const handleOnClick = () => {
    window.open(link, "_blank");
  };
  return (
    <Box className={classes.serviceCard} onClick={onClick ?? handleOnClick}>
      <Image src={picture || img} width={"140px"} height={"100px"} fit="fill" />
      <Text fw={"500"} fz="lg">
        {title}
      </Text>
      <Text fz={"sm"} color="gray" align="center">
        {description}
      </Text>
    </Box>
  );
};

export default ServiceCard;
