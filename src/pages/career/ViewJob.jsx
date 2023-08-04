import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowNarrowLeft } from "tabler-icons-react";

const ViewJob = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Box p={isMobile ? "20px" : "100px"}>
      <Anchor
        color={theme.colors.purple}
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => navigate(-1)}
      >
        <ArrowNarrowLeft size={"18px"} /> Back
      </Anchor>
      <Title align="center" color={theme.colors.purple} fw={400}>
        Software Developer
      </Title>
      <Title order={4} align="center" fw={200}>
        Deicmal Solutions
      </Title>
      <Button
        bg={theme.colors.purple}
        onClick={() => navigate("/careers/apply-job")}
        style={{
          display: "flex",
          margin: "auto",
          marginBlock: "20px",
          marginLeft: isMobile ? "" : "auto",
        }}
      >
        Apply Now
      </Button>
      <Stack mb="lg" spacing={"xs"}>
        <Flex gap="md">
          <Text fw="bold">Minimum Qualifications: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Experience Level: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Minimum Experience: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Location: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Job Type: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Application Deadline: </Text>
          <Text>Bachelors</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Salary Range: </Text>
          <Text>Bachelors</Text>
        </Flex>
      </Stack>
      <Title order={4}>Job Description</Title>
      <Text>Job</Text>
      <Title order={4}>Job Requirements</Title>
      <Text>Job</Text>
      <Title order={4}>Job Responsibilities</Title>
      <Text>Job</Text>
    </Box>
  );
};

export default ViewJob;
