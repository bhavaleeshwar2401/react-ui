import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer" bg="lightgray" color="black" py={10}>
      <center>
        <Heading size="sm" mb={2}>
          <h2>Growth Analytics made Simple</h2>
          <p>join over 4,000+ startups already growing with untitled</p>
        </Heading>
        <button className="btn-book">Book a call</button>
        <button className="btn-demo">Book a Demo</button>
      </center>
      <SimpleGrid columns={[2, 3, 6]} spacing={8} maxW="7xl" mx="auto" px={6}>
        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Product
          </Heading>
          <Link className="link1">Overview</Link>
          <Link className="link1">Features</Link>
          <Link className="link1">Solutions</Link>
          <Link className="link1">Tutorials</Link>
          <Link className="link1">Pricing</Link>
          <Link className="link1">Releases</Link>
        </Stack>

        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Company
          </Heading>
          <Link className="link1">About us</Link>
          <Link className="link1">Careers</Link>
          <Link className="link1">Press</Link>
          <Link className="link1">News</Link>
          <Link className="link1">Media kit</Link>
          <Link className="link1">Contact</Link>
        </Stack>

        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Resources
          </Heading>
          <Link className="link1">Blog</Link>
          <Link className="link1">Newsletter</Link>
          <Link className="link1">Events</Link>
          <Link className="link1">Help centre</Link>
          <Link className="link1">Tutorials</Link>
          <Link className="link1">Support</Link>
        </Stack>

        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Use-cases
          </Heading>
          <Link className="link1">Startups</Link>
          <Link className="link1">Enterprise</Link>
          <Link className="link1">Government</Link>
          <Link className="link1">SaaS centre</Link>
          <Link className="link1">Marketplaces</Link>
          <Link className="link1">Ecommerce</Link>
        </Stack>

        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Social
          </Heading>
          <Link className="link1">Twitter</Link>
          <Link className="link1">LinkedIn</Link>
          <Link className="link1">Facebook</Link>
          <Link className="link1">GitHub</Link>
          <Link className="link1">AngelList</Link>
          <Link className="link1">Dribbble</Link>
        </Stack>

        <Stack align="flex-start">
          <Heading className="Heading1" size="sm" mb={2}>
            Legal
          </Heading>
          <Link className="link1">Terms</Link>
          <Link className="link1">Privacy</Link>
          <Link className="link1">Cookies</Link>
          <Link className="link1">Licenses</Link>
          <Link className="link1">Settings</Link>
          <Link className="link1">Contact</Link>
        </Stack>
      </SimpleGrid>
      <br />
      <br />
      <Flex justify="right" mt={10}>
        <Text fontSize="sm" color="black">
          2077 Untitled UI. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
