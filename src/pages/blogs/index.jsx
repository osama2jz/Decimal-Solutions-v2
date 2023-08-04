import {
  Box,
  Flex,
  Group,
  Image,
  Loader,
  RingProgress,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import whoWeAre from "../../assets/whoWeAre.png";
import whatWeDo from "../../assets/whatWeDo.png";
import osam from "../../assets/osama.jpg";
import { useMediaQuery } from "@mantine/hooks";
import BlogCard from "./BlogCard";
import axios from "axios";
import { backendUrl } from "../../constants";

const Blogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/blogs").then((res) => {
      setBlogs(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR BLOGS</Title>
      </Box>
      {isLoading ? (
        <Loader
          size={"md"}
          color={theme.colors.purple}
          style={{ display: "flex", margin: "auto", marginBlock: "100px" }}
        />
      ) : blogs.length < 1 ? (
        <Title py="150px" align="center" color="gray">
          No Blog Found
        </Title>
      ) : (
        <SimpleGrid
          spacing={"xl"}
          p={isMobile ? "20px" : "100px"}
          breakpoints={[
            { minWidth: "xs", cols: 1 },
            { minWidth: "sm", cols: 2 },
            { minWidth: "lg", cols: 3 },
          ]}
        >
          {blogs.map((obj, ind) => {
            return <BlogCard obj={obj} ind={ind} key={ind} />;
          })}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Blogs;
