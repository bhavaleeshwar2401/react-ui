import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Checkbox,
  Stack,
  Grid,
  GridItem,
  Textarea,
  Select,
  Divider,
  FormLabel,
  FormControl,
  HStack,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

function ContactFormPage() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      countryCode: "IN",
      teamSize: "",
      location: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .min(3, "Firstname must be at least 3 characters long")
        .required("Required"),
      lastname: Yup.string()
        .min(3, "Lastname must be at least 3 characters long")
        .required("Required"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box p={8} minH="100vh">
      <Grid
        templateColumns={["1fr", null, "1fr 1fr"]}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        <GridItem bg="gray.100" p={8} borderRadius="30" boxShadow="lg">
          <Heading size="md" mb={6}>
            Send us a message
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <HStack spacing={4}>
                <FormControl
                  isInvalid={
                    formik.touched.firstname && formik.errors.firstname
                  }
                >
                  <FormLabel>First name</FormLabel>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Enter first name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    bg="white"
                  />
                  <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.lastname && formik.errors.lastname}
                >
                  <FormLabel>Last name</FormLabel>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    bg="white"
                  />
                  <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  bg="white"
                />
                {!formik.errors.email ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <HStack>
                  <Select
                    name="countryCode"
                    value={formik.values.countryCode}
                    onChange={formik.handleChange}
                    bg="white"
                    w="30%"
                  >
                    <option value="IN">IN</option>
                    <option value="AU">AU</option>
                    <option value="US">US</option>
                  </Select>
                  <Input
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    bg="white"
                    placeholder="+61 400 000 000"
                  />
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel>Team size</FormLabel>
                <Select
                  name="teamSize"
                  value={formik.values.teamSize}
                  onChange={formik.handleChange}
                  bg="white"
                  placeholder="Select team size"
                >
                  <option>1-50 people</option>
                  <option>50-100 people</option>
                  <option>100-200 people</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Location</FormLabel>
                <Select
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  bg="white"
                  placeholder="Select location"
                >
                  <option>Australia</option>
                  <option>India</option>
                  <option>Europe</option>
                </Select>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.message && formik.errors.message}
              >
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  bg="white"
                  placeholder="Leave us a message..."
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>

              <Box>
                <FormLabel fontWeight="bold" fontSize="sm" mb={2}>
                  Which products are you interested in?
                </FormLabel>
                <Grid templateColumns="repeat(2,1fr)" gap={2}>
                  <Checkbox>Untitled Mail</Checkbox>
                  <Checkbox>Untitled VPN</Checkbox>
                  <Checkbox>Untitled Calendar</Checkbox>
                  <Checkbox>Untitled Workspace</Checkbox>
                  <Checkbox>Untitled Drive</Checkbox>
                </Grid>
              </Box>

              <Button
                type="submit"
                borderRadius={50}
                colorScheme="green"
                size="lg"
                w="full"
                bg="green.900"
              >
                Send message
              </Button>
            </Stack>
          </form>
        </GridItem>

        <GridItem>
          <Stack spacing={8}>
            <Box>
              <Heading size="sm">Chat to sales</Heading>
              <Text mt={1}>
                Interested in switching? Speak to our friendly team.
              </Text>
              <Text mt={2} fontWeight="bold" color="black">
                sales@untitledai.com
              </Text>
            </Box>
            <Divider />

            <Box>
              <Heading size="sm">Email support</Heading>
              <Text mt={1}>
                Email us and we'll get back to you within 24 hours.
              </Text>
              <Text mt={2} fontWeight="bold" color="black">
                support@untitledai.com
              </Text>
            </Box>
            <Divider />

            <Box>
              <Heading size="sm">Chat support</Heading>
              <Text mt={1}>
                Chat to our staff 24/7 for instant access to support.
              </Text>
              <Text mt={2} fontWeight="bold" color="black">
                Start live chat -{" "}
                <Text as="span" color="green.500">
                  Online
                </Text>
              </Text>
            </Box>
            <Divider />

            <Box>
              <Heading size="sm">Call us</Heading>
              <Text mt={1}>Mon - Fri: 9:00 AM - 5:00 PM (UTC/GMT +10:00)</Text>
              <Text mt={2} fontWeight="bold" color="black">
                1300 132 642
              </Text>
              <Text fontWeight="bold" color="black">
                +61 409 000 004
              </Text>
            </Box>

            <Box>
              <Heading size="sm">Melbourne</Heading>
              <Text mt={1}>Visit our office Mon - Fri, 9:00 AM - 5:00 PM</Text>
              <Text mt={2} fontWeight="bold" color="black">
                10 Service Street
                <br />
                Flurey VIC 3065 Australia
              </Text>
            </Box>
            <Divider />

            <Box>
              <Heading size="sm">Sydney</Heading>
              <Text mt={1}>Visit our office Mon - Fri, 9:00 AM - 5:00 PM</Text>
              <Text mt={2} fontWeight="bold" color="black">
                40 Bridge Street
                <br />
                Sydney NSW 2000 Australia
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContactFormPage;
