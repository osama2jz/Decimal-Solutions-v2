import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const ViewBlog = () => {
  const { classes } = useStyles();
  const { blogData } = useLocation()?.state;
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">{blogData?.blogTitle}</Title>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        px={isMobile ? "30px" : "100px"}
        py={isMobile ? "50px" : "100px"}
        gap={"lg"}
        justify={"space-between"}
      >
        <Text align="justify" w={isMobile ? "100%" : "50%"}>
          {blogData?.blogData}
        </Text>
        <img src={blogData?.blogImage} width={isMobile ? "50%" : "40%"} style={{margin:'auto'}}/>
      </Flex>
    </Box>
  );
};

export default ViewBlog;
