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
import React, { useState } from "react";
import { useStyles } from "./styles";
import whoWeAre from "../../assets/whoWeAre.png";
import whatWeDo from "../../assets/whatWeDo.png";
import osam from "../../assets/osama.jpg";
import { useMediaQuery } from "@mantine/hooks";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">OUR BLOGS</Title>
      </Box>
      {loading ? (
        <Loader size={"md"} m="auto" />
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
