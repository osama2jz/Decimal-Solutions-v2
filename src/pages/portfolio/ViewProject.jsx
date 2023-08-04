import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";
import { useMediaQuery } from "@mantine/hooks";
import { ExternalLink } from "tabler-icons-react";

const ViewProject = () => {
  const { classes } = useStyles();
  const { project } = useLocation()?.state;
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { category } = useLocation()?.state;
  const theme = useMantineTheme();
  return (
    <Box style={{ textAlign: "center" }}>
      <Box className={classes.projectView}>
        <Title color="white">{project?.title}</Title>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        px={isMobile ? "10px" : "100px"}
        py="md"
      >
        <Stack w={isMobile ? "100%" : "50%"} style={{textAlign:'left'}}>
          <Title color={theme.colors.purple} fw={400}>
            How We Did It
          </Title>
          <Box className={classes.date}>
            <Text>
              <b>Date:</b>{" "}
              {moment(project?.completedAt || project?.createdAt).format(
                "DD MMMM YYYY"
              )}
            </Text>
            <Text>
              <b>Category:</b> {category && category}
            </Text>
          </Box>
          <Text align="justify">{project?.description}</Text>
        </Stack>
        <img src={project?.coverImage} />
      </Flex>
      <Button
        bg={theme.colors.purple}
        mb="md"
        leftIcon={<ExternalLink size={20} />}
      >
        View Demo
      </Button>
    </Box>
  );
};

export default ViewProject;
