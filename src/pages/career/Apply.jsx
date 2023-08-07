import {
  Button,
  Flex,
  Loader,
  Select,
  SimpleGrid,
  TextInput,
  Title,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import Dropzone from "../../components/Dropzone";
import ReactInputMask from "react-input-mask";
import { Check } from "tabler-icons-react";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

const Apply = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { job } = useLocation().state;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      resume: null,
      contactNumber: "",
      whatsappNumber: "",
      yearsOfExperience: "",
      gender: "",
      address: "",
      applicantComments: "",
    },
    validateInputOnBlur: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) => (value.length < 2 ? "Enter full name" : null),
      contactNumber: (value) =>
        !/^\+?[0-9]{10,14}$/.test(value) ? "Enter valid contact number" : null,
      whatsappNumber: (value) =>
        !/^\+?[0-9]{10,14}$/.test(value) ? "Enter whatsapp number" : null,
      yearsOfExperience: (value) =>
        value.length < 1 ? "Select experience" : null,
      gender: (value) => (value.length < 1 ? "Select gender" : null),
      address: (value) => (value.length < 1 ? "Enter city" : null),
      resume: (value) => (!value ? "Upload Resume" : null),
    },
  });
  const applyforJob = (values) => {
    setIsLoading(true);
    values.job = job?._id;
    axios
      .post(backendUrl + "/api/v1/web/jobApplications", values)
      .then((res) => {
        setIsLoading(false);
        setIsSubmitted(true);
      });
  };
  return (
    <>
      {submitted ? (
        <Stack spacing={"md"} align="center" mb="md">
          <Flex justify={"center"} align={"center"} gap={"md"} my="150px">
            <Check color="purple" size={"50px"} />
            <Title>Application Submitted</Title>
          </Flex>
          <Button onClick={() => navigate("/careers")} bg={theme.colors.purple}>
            Go Back
          </Button>
        </Stack>
      ) : isLoading ? (
        <Flex justify={"center"} align={"center"} gap={"md"} my="150px">
          <Loader color={theme.colors.purple} />
          <Title>Submitting Application</Title>
        </Flex>
      ) : (
        <form
          onSubmit={form.onSubmit((values) => applyforJob(values))}
          style={{ textAlign: "center", paddingBlock: "50px" }}
        >
          <Title align="center" color={theme.colors.purple} fw={400}>
            Apply Online
          </Title>
          <Title order={4} align="center" fw={300}>
            Please fill the form to apply
          </Title>
          <SimpleGrid
            cols={2}
            px={isMobile ? "10px" : "100px"}
            py="20px"
            breakpoints={[
              { maxWidth: "sm", cols: 2, spacing: "sm" },
              { maxWidth: "xs", cols: 1, spacing: "sm" },
            ]}
          >
            <TextInput
              placeholder="Full Name"
              size="lg"
              {...form.getInputProps("fullName")}
            />
            <TextInput
              placeholder="Email"
              size="lg"
              {...form.getInputProps("email")}
            />
            <Select
              placeholder="Gender"
              data={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
              size="lg"
              {...form.getInputProps("gender")}
            />
            <TextInput
              placeholder="City"
              size="lg"
              {...form.getInputProps("address")}
            />
            <TextInput
              placeholder="+92 300 1234567"
              size="lg"
              type="number"
              //   component={ReactInputMask}
              //   mask="+92 300 1234567"
              {...form.getInputProps("contactNumber")}
            />
            <TextInput
              placeholder="Whatsapp Number"
              size="lg"
              type="number"
              {...form.getInputProps("whatsappNumber")}
            />
            <Select
              placeholder="Experience (in Years)"
              data={["0-1", "1-3", "3-5", "5-8", "8-10", "10-15", "15+"]}
              size="lg"
              {...form.getInputProps("yearsOfExperience")}
            />
          </SimpleGrid>
          <Dropzone
            form={form}
            folderName={"jobApplications"}
            name={"resume"}
            label="Resume"
            mx="100px"
          />

          <Button bg={theme.colors.purple} my="lg" type="submit">
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default Apply;
