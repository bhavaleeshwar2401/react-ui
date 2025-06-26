import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Box mt={10} mx="auto" w="95%" borderRadius={20} bg="gray.100" p={10}>
        <Flex direction="column" align="center" mb={10}>
          <Text fontSize="xl" fontWeight="bold">
            Growth analytics made simple
          </Text>
          <Text fontSize="sm" color="gray.600">
            Join over 4,000+ startups already growing with Untitled.
          </Text>
          <Stack mt={4} direction="row" spacing={4}>
            <Button
              // boxShadow="outline"
              variant="outline"
              color="black"
              borderRadius="50"
              bg="white"
            >
              Sign in
            </Button>
            <Button borderRadius="50" bg="green.900" color="white">
              Book a demo
            </Button>
          </Stack>
        </Flex>

        <SimpleGrid columns={[2, null, 6]} spacing={8} textAlign="left">
          <Stack>
            <Text fontWeight="bold">Product</Text>
            <Text>Overview</Text>
            <Text>Features</Text>
            <Text>Solutions</Text>
            <Text>Tutorials</Text>
            <Text>Pricing</Text>
            <Text>Releases</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Company</Text>
            <Text>About us</Text>
            <Text>Careers</Text>
            <Text>Press</Text>
            <Text>News</Text>
            <Text>Media kit</Text>
            <Text>Contact</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Resources</Text>
            <Text>Blog</Text>
            <Text>Newsletter</Text>
            <Text>Events</Text>
            <Text>Help centre</Text>
            <Text>Tutorials</Text>
            <Text>Support</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Use cases</Text>
            <Text>Startups</Text>
            <Text>Enterprise</Text>
            <Text>Government</Text>
            <Text>SaaS centre</Text>
            <Text>Marketplaces</Text>
            <Text>Ecommerce</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Social</Text>
            <Text>Twitter</Text>
            <Text>LinkedIn</Text>
            <Text>Facebook</Text>
            <Text>GitHub</Text>
            <Text>AngelList</Text>
            <Text>Dribbble</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Legal</Text>
            <Text>Terms</Text>
            <Text>Privacy</Text>
            <Text>Cookies</Text>
            <Text>Licenses</Text>
            <Text>Settings</Text>
            <Text>Contact</Text>
          </Stack>
        </SimpleGrid>

        <Flex justify="space-between" mt={10} fontSize="sm">
          <Heading color="black" fontSize="lg" fontWeight="bold">
            Untitled
          </Heading>
          <Spacer />
          <Text color="gray.500">© 2024 Untitled UI. All rights reserved.</Text>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
