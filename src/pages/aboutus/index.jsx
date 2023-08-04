import {
  Box,
  Flex,
  Group,
  Image,
  Loader,
  RingProgress,
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
import axios from "axios";
import { backendUrl } from "../../constants";

const AboutUs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [isLoading, setIsLoading] = useState(false);
  const [profileCards, setProfileCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/teamMembers").then((res) => {
      setProfileCards(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">ABOUT US</Title>
      </Box>
      <Box className={classes.sub}>
        <Title align="center" fw={400}>
          OUR MISSION
        </Title>
        <Title order={4} align="center" fw={300}>
          Our mission is to provide all sorts of IT solutions and services to
          clients under one umbrella. We aim to provide quality products and
          perform strict testing so clients can have a product that is ready to
          use without further updates.
        </Title>
        <Group position="apart" mt={"50px"}>
          <Stack w={isMobile ? "100%" : "40%"} align="center">
            <img src={whoWeAre} width={"120px"} />
            <Title order={2}>WHO WE ARE</Title>
            <Text align="center">
              We are a team of software development and testing enthusiasts,
              working tirelessly on software quality assurance. The last 2 years
              were the time we founded, developed, grew, and amazed. And we are
              still growing by working with some major clients from all over the
              world.
            </Text>
          </Stack>
          <Stack w={isMobile ? "100%" : "40%"} align="center">
            <img src={whatWeDo} width={"120px"} />
            <Title order={2}>What We Do</Title>
            <Text align="center">
              We help set up and maintain a digital presence of your brand or
              product. Our creative team makes sure that you have the most
              updated and innovative technology at your hands to boost your
              business. Your success is our success that’s why we prioritize
              customization, listen to your needs, and cover all the bases.
            </Text>
          </Stack>
        </Group>
      </Box>
      <Group className={classes.perform} position="apart" px="100px">
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                100%
              </Text>
            }
            sections={[{ value: 100, color: theme.colors.purple }]}
          />
          <Text align="center">Website Development</Text>
        </Stack>
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                80%
              </Text>
            }
            sections={[{ value: 85, color: theme.colors.purple }]}
          />
          <Text align="center">Mobile App Developement</Text>
        </Stack>
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                70%
              </Text>
            }
            sections={[{ value: 70, color: theme.colors.purple }]}
          />
          <Text align="center">AR/VR Games</Text>
        </Stack>
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                75%
              </Text>
            }
            sections={[{ value: 75, color: theme.colors.purple }]}
          />
          <Text align="center">UI/UX Design</Text>
        </Stack>
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                85%
              </Text>
            }
            sections={[{ value: 85, color: theme.colors.purple }]}
          />
          <Text align="center">Digital Marketing</Text>
        </Stack>
        <Stack align="center" w="170px">
          <RingProgress
            label={
              <Text
                size="lg"
                align="center"
                fw="bold"
                color={theme.colors.purple}
              >
                90%
              </Text>
            }
            sections={[{ value: 90, color: theme.colors.purple }]}
          />
          <Text align="center">ERP</Text>
        </Stack>
      </Group>
      <Box p="80px">
        <Title align="center" color={theme.colors.purple} fw={400}>
          OUR TEAM
        </Title>
        <Title order={4} align="center" fw={400}>
          Our Team Of Experts
        </Title>
        <Flex
          wrap={"wrap"}
          gap="sm"
          m="auto"
          mt="xl"
          justify={"center"}
          rowGap={"30px"}
        >
          {isLoading ? (
            <Loader color={theme.colors.purple} />
          ) : (
            profileCards.map((person, ind) => {
              return (
                <Stack key={ind} w={"270px"} spacing={"0px"} align="center">
                  <Image
                    src={person.teamMemberImage}
                    width={"250px"}
                    height={"250px"}
                    radius={"xl"}
                  />
                  <Text fw={"bold"} fz={"lg"}>
                    {person.teamMemberName}
                  </Text>
                  <Text color={theme.colors.blue}>
                    {person.teamMemberTitle}
                  </Text>
                </Stack>
              );
            })
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
