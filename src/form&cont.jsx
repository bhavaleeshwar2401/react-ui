import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Checkbox,
  Stack,
  Avatar,
  Grid,
  GridItem,
  Textarea,
  Select,
  Center,
  Divider,
  FormLabel,
  FormControl,
  Flex,
  HStack,
} from "@chakra-ui/react";

function ContactFormPage() {
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
          <Stack spacing={4}>
            <HStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input bg="white" placeholder="First name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input bg="white" placeholder="Last name" />
              </FormControl>
            </HStack>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" bg="white" placeholder="you@company.com" />
            </FormControl>

            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <HStack>
                <Select bg="white" w="30%">
                  <option>IN</option>
                  <option>AU</option>
                  <option>US</option>
                </Select>
                <Input bg="white" placeholder="+61 400 000 000" />
              </HStack>
            </FormControl>

            <FormControl>
              <FormLabel>Team size</FormLabel>
              <Select bg="white" placeholder="Select team size">
                <option>1-50 people</option>
                <option>50-100 people</option>
                <option>100-200 people</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Select bg="white" placeholder="Select location">
                <option>Australia</option>
                <option>India</option>
                <option>Europe</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea bg="white" placeholder="Leave us a message..." />
            </FormControl>

            <Box>
              <FormLabel fontWeight="bold" fontSize="sm" mb={2}>
                Which products are you interested in?
              </FormLabel>
              <Grid templateColumns="repeat(2,1fr)" gap={2}>
                <Checkbox >Untitled Mail</Checkbox>
                <Checkbox>Untitled VPN</Checkbox>
                <Checkbox>Untitled Calendar</Checkbox>
                <Checkbox>Untitled Workspace</Checkbox>
                <Checkbox>Untitled Drive</Checkbox>
              </Grid>
            </Box>

            <Button borderRadius={50} colorScheme="green" size="lg" w="full">
              Send message
            </Button>
          </Stack>
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
