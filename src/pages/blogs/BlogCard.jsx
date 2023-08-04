import { Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ obj, ind }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  return (
    <Stack
      key={ind}
      p="10px"
      spacing={"xs"}
      style={{
        cursor: "pointer",
        border: "1px solid rgb(0,0,0,0.1)",
        borderRadius: "10px",
        boxShadow: "0px 5px 5px rgb(0,0,0,0.2)",
      }}
      onClick={() => navigate("/view-blog", { state: { blogData: obj } })}
    >
      <Image src={obj?.picture} height={"280px"} />
      <Text fz="xs" align="left">
        Published:{" "}
        {new Date(obj?.date_time).getDate() +
          "-" +
          new Date(obj?.date_time).getMonth() +
          "-" +
          new Date(obj?.date_time).getFullYear()}
      </Text>
      <Text fw={"bold"} fz={"lg"} color={theme.colors.blue} align="left">
        {obj?.title}
      </Text>
      <Text fz="lg" align="left">
        {obj?.short_description}
      </Text>
    </Stack>
  );
};

export default BlogCard;
