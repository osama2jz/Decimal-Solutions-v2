import { Box, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import four from "../../assets/4.svg";
import join from "../../assets/join.svg";
import { useStyles } from "./styles";

const Career = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">CAREER</Title>
      </Box>
      <Stack spacing={"md"} p="md" bg="rgb(0,0,0,0.08)">
        <Title align="center" color={theme.colors.purple} fw={400}>
          Hiring Steps
        </Title>
        <Title order={4} align="center" fw={200}>
          Our Recruitment Process
        </Title>
        <SimpleGrid
          spacing={"xl"}
          py={"40px"}
          px={"60px"}
          breakpoints={[
            { minWidth: "xs", cols: 1 },
            { minWidth: "sm", cols: 2 },
            { minWidth: "lg", cols: 5 },
          ]}
        >
          <img src={one} width="100%" className={classes.img} />
          <img src={two} width="100%" className={classes.img} />
          <img src={three} width="100%" className={classes.img} />
          <img src={four} width="100%" className={classes.img} />
          <img src={join} className={classes.img} />
        </SimpleGrid>
      </Stack>
      <Outlet />
    </Box>
  );
};

export default Career;
