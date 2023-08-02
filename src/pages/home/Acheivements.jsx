import { Box, Group, Text, Title, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import ach1 from "../../assets/ach1.svg";
import ach2 from "../../assets/ach2.svg";
import ach3 from "../../assets/ach3.svg";
import ach4 from "../../assets/ach4.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Acheivements = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [count, setCount] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <Box className={classes.achievement}>
        <Title align="center" color={"white"} fw={400}>
          Some Facts
        </Title>
        <Title order={4} align="center" fw={200} color="white">
          Number of Achievements
        </Title>
        <Group position="apart" w="100%">
          <Box className={classes.ach}>
            <img src={ach1} />
            {count && (
              <CountUp
                start={0}
                end={10}
                duration={3}
                style={{ fontSize: "60px", fontWeight: 1000 }}
              />
            )}
            <Text>Years Of Operation</Text>
          </Box>
          <Box className={classes.ach}>
            <img src={ach2} />
            {count && (
              <CountUp
                start={0}
                end={112}
                duration={3}
                style={{ fontSize: "60px", fontWeight: 1000 }}
              />
            )}
            <Text>Completed Projects</Text>
          </Box>
          <Box className={classes.ach}>
            <img src={ach3} />
            {count && (
              <CountUp
                start={0}
                end={55}
                duration={3}
                style={{ fontSize: "60px", fontWeight: 1000 }}
              />
            )}
            <Text>Loyal Clients</Text>
          </Box>
          <Box className={classes.ach}>
            <img src={ach4} />
            {count && (
              <CountUp
                start={0}
                end={7}
                duration={3}
                style={{ fontSize: "60px", fontWeight: 1000 }}
              />
            )}
            <Text>New Projects</Text>
          </Box>
        </Group>
      </Box>
    </ScrollTrigger>
  );
};

export default Acheivements;
