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
import moment from "moment";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowNarrowLeft } from "tabler-icons-react";

const ViewJob = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { job } = useLocation().state;
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
        {job?.title}
      </Title>
      <Title order={4} align="center" fw={200}>
        Deicmal Solutions
      </Title>
      <Button
        bg={theme.colors.purple}
        onClick={() => navigate("/careers/apply-job", { state: { job: job } })}
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
          <Text>{job?.minimumQualifications}</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Experience Level: </Text>
          <Text>{job?.jobLevel}</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Minimum Experience: </Text>
          <Text>{job?.minimumExperience}</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Location: </Text>
          <Text>{job?.location}</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Job Type: </Text>
          <Text>{job?.type}</Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Application Deadline: </Text>
          <Text>
            {moment(job?.jobApplicationDeadline).format("DD MMMM YYYY")}
          </Text>
        </Flex>
        <Flex gap="md">
          <Text fw="bold">Salary Range: </Text>
          <Text>
            PKR {job?.minimumJobSalary} - {job?.maximumJobSalary}
          </Text>
        </Flex>
      </Stack>
      <Title order={4}>Job Description</Title>
      <Text>{job?.description}</Text>
      <Title order={4}>Job Requirements</Title>
      <Text>{job?.jobRequirements}</Text>
      <Title order={4}>Job Responsibilities</Title>
      <Text>{job?.jobResponsibilities}</Text>
    </Box>
  );
};

export default ViewJob;
