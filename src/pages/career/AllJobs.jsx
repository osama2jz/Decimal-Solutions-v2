import { Flex, Image, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import JobCard from "./JobCard";
import funnyGroup from "../../assets/funnyGroup.jpg";
import girlLaptop from "../../assets/girlLaptop.jpg";
import handWriting from "../../assets/handWriting.jpg";
import amazedGroup from "../../assets/amazedGroup.jpg";

const AllJobs = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 1285px)");
  const [jobs, setJobs] = useState([{ title: "ABC" }, {}, {}]);
  const theme = useMantineTheme();

  return (
    <>
      <Flex p={isMobile ? "20px" : "80px"} gap={"30px"} align={"center"}>
        <Stack w={isMobile2 ? "100%" : "40%"}>
          <Title order={4}>Start Work with Us!</Title>
          <Text align="justify">
            If you are passionate about providing solutions to IT needs then
            Decimal Solutions is a perfect place for you to work. We believe in
            serving our customers with the best by using the right tools. If you
            have it in you to contribute to the digital world; submit your
            resume today and we’ll get back to you.
          </Text>
          <Title order={4}>Why Working with us?</Title>
          <Text align="justify">
            Decimal Solutions provide a challenging yet innovative platform for
            all the enthusiasts looking to leave a mark in the digital world. We
            provide a comfortable and friendly working environment,
            market-competitive salaries, and continuous opportunities for growth
            by increasing your learning while working with us.
          </Text>
        </Stack>
        {!isMobile2 && (
          <SimpleGrid cols={2} w={"60%"} spacing={"20px"}>
            <Image src={funnyGroup} height={"300px"} width={330} mt={"xl"} />
            <Image src={amazedGroup} width={270} height={270} />
            <Image src={handWriting} width={270} height={250} ml="auto" />
            <Image src={girlLaptop} height={400} width={280} mt="-60px" />
          </SimpleGrid>
        )}
      </Flex>
      <Stack bg={theme.colors.purple} py="10px" spacing={"xs"}>
        <Title align="center" color={"white"} fw={400}>
          Available Positions
        </Title>
        <Title order={4} align="center" fw={400} color="white">
          Find your desired jobs & get recruited!
        </Title>
      </Stack>
      <Stack w={isMobile ? "90%" : "60%"} m="auto" py="xl">
        {jobs.map((obj, ind) => {
          return <JobCard obj={obj} key={ind} />;
        })}
      </Stack>
    </>
  );
};

export default AllJobs;
