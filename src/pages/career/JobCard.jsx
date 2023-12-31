import {
  Anchor,
  Box,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { ChevronRight } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ obj }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Box className={classes.job}>
      <Stack spacing={"XS"} align="flex-start" style={{ flexBasis: "25%" }}>
        <Text fw={"bold"} fz="lg">
          {obj?.title}
        </Text>
        <Text>Experience: {obj?.minimumExperience}</Text>
      </Stack>
      <Text>Positions: {obj?.vacancies}</Text>
      <Text>Job Type: {obj?.type}</Text>
      <Anchor
        color={theme.colors.purple}
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => navigate("/careers/view-job", { state: { job: obj } })}
      >
        View Details <ChevronRight size={"18px"} />
      </Anchor>
    </Box>
  );
};

export default JobCard;
