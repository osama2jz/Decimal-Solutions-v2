import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useStyles } from "./styles";
import { useForm } from "@mantine/form";

const ContactUs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      interestedIn: "",
      details: "",
    },
    validateInputOnBlur: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) => (value.length < 2 ? "Enter full name" : null),
      interestedIn: (value) =>
        value.length < 2 ? "Please fill the field" : null,
      details: (value) => (value.length < 2 ? "Please fill the field" : null),
    },
  });
  return (
    <Box>
      <Box className={classes.heading}>
        <Title color="white">CONTACT US</Title>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        p={isMobile ? "20px" : "100px"}
        gap="50px"
        justify={"space-between"}
      >
        <Stack className={classes.details} w={isMobile ? "100%" : "50%"}>
          <Title order={2} color={theme.colors.purple} fw={400}>
            Contact Us
          </Title>
          <Title order={4} fw={300}>
            Get In Touch
          </Title>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Contact Number
            </Text>
            <Text>+92 345 5893337</Text>
          </Stack>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Email
            </Text>
            <Text>info@decimalsolution.com</Text>
          </Stack>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Office Address
            </Text>
            <Text>
              Office No# 17, 2nd Floor, Zaki Centre, I-8 Markaz Islamabad, 44000
            </Text>
          </Stack>
        </Stack>
        <form
          style={{ width: isMobile ? "100%" : "45%" }}
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <Stack w="100%">
            <Title order={2} color={theme.colors.purple} fw={400}>
              Get Pure Estimate
            </Title>
            <Title order={4} fw={300}>
              Fill up the form
            </Title>
            <TextInput
              placeholder="Full Name"
              {...form.getInputProps("fullName")}
            />
            <TextInput placeholder="Email" {...form.getInputProps("email")} />
            <TextInput
              placeholder="Interested In"
              {...form.getInputProps("interestedIn")}
            />

            <Textarea
              placeholder="Write details here"
              {...form.getInputProps("details")}
            />
            <Button bg={theme.colors.purple} my="lg" type="submit">
              Get Qoute
            </Button>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
};

export default ContactUs;
