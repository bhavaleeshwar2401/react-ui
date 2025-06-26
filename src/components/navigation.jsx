import React, { useContext } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useMediaQuery,
  background,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ThemeContext } from "./Home";

function Navigation() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false,
  });

  const { isOpen, onToggle } = useDisclosure();

  const { theme } = useContext(ThemeContext);
  const textStyle = {
    color: theme === "light" ? "white" : "red",
  };

  return (
    <Box
      boxShadow="lg"
      borderRadius="50px"
      bg="gray.100"
      mt="10px"
      py={3}
      px={6}
      w="95%"
      mx="auto"
    >
      <Flex alignItems="center">
        {/* Logo */}
        <HStack spacing={2}>
          <Text fontWeight="bold" fontSize="lg">
            Untitled UI
          </Text>
        </HStack>

        {/* Desktop Menu */}
        {isLargerThan800 ? (
          <>
            <HStack spacing={8} ml={10} fontSize="md">
              <Menu>
                <MenuButton fontWeight="bold" px={4} py={2}>
                  Products <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Product1</MenuItem>
                  <MenuItem>Product2</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton fontWeight="bold" px={4} py={2}>
                  Features <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Feature1</MenuItem>
                  <MenuItem>Feature2</MenuItem>
                </MenuList>
              </Menu>

              <Link fontWeight="bold">Pricing</Link>
              <Link ml={10} fontWeight="bold">
                Blog
              </Link>
              <Link ml={10} fontWeight="bold">
                Contact
              </Link>
            </HStack>
            <Spacer />
            <ButtonGroup gap="2">
              <Button
                style={textStyle}
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
            </ButtonGroup>
          </>
        ) : (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={onToggle}
            aria-label="Toggle Navigation"
            ml="auto"
          />
        )}
      </Flex>

      {/* Mobile Menu */}
      {!isLargerThan800 && (
        <Collapse in={isOpen} animateOpacity>
          <VStack spacing={4} mt={4} align="start" fontSize="md" pl={2}>
            <Menu>
              <MenuButton fontWeight="bold">
                Products <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Product1</MenuItem>
                <MenuItem>Product2</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton fontWeight="bold">
                Features <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Feature1</MenuItem>
                <MenuItem>Feature2</MenuItem>
              </MenuList>
            </Menu>

            <Link fontWeight="bold">Pricing</Link>
            <Link fontWeight="bold">Blog</Link>
            <Link fontWeight="bold">Contact</Link>

            <Button
              w="100%"
              variant="outline"
              color="black"
              borderRadius="full"
            >
              Sign in
            </Button>
            <Button w="100%" bg="green.900" color="white" borderRadius="full">
              Book a demo
            </Button>
          </VStack>
        </Collapse>
      )}
    </Box>
  );
}

export default Navigation;
