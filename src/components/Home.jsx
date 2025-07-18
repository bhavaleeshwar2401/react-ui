import React, { createContext, useState } from "react";
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
} from "@chakra-ui/react";
import Navigation from "./navigation";
import ContactFormPage from "./form&cont";
import Footer from "./footer";

export const ThemeContext = createContext();

function Home() {
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <Box>
        <Navigation />
        <Center flexDirection="column" textAlign="center" p={10}>
          <Heading>Real support, from real experts</Heading>
          <Heading>- anytime you need it</Heading>
          <Text fontSize="sm" mt={2}>
            Our award-winning team is here for you 24/7, ready to help you solve
            problems, scale faster, and stay on track.
          </Text>
          <Heading mt={5}>Contact our sales team</Heading>
          <Text fontSize="sm" mt={2}>
            No matter your business size, needs or payments infrastructure, our
            expert team can help.
          </Text>
          <Stack direction="row" mt={4}>
            <Button onClick={toggleTheme} borderRadius={50} variant="outline">
              Contact Us
            </Button>
            <Button borderRadius={50} bg="green.900" color="white">
              Book a Demo
            </Button>
          </Stack>
        </Center>

        <ContactFormPage />

        <Box mx="auto" borderRadius={20} w="95%" mt={10} bg="gray.100" py={10}>
          <Center flexDirection="column">
            <Text
              fontSize="lg"
              textAlign="center"
              maxW="4xl"
              mb={6}
              fontWeight={"bold"}
            >
              As a small business owner, I've tried a lot of platforms — but
              Untitled blew me away. Selling my digital products is now
              effortless, and the built-in Xero integration saves me hours each
              month. Couldn't recommend it more!
            </Text>
            <Avatar
              mt={10}
              name="Cara Valentine"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontWeight="bold" mt={2}>
              Cara Valentine
            </Text>
            <Text>Product Manager</Text>
          </Center>
        </Box>
        <Footer />
      </Box>
    </ThemeContext.Provider>
  );
}

export default Home;