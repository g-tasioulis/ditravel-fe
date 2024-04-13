import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import NextLink from "next/link";
import React from "react";
import "./navbar.css";
import { NavItemProps } from "@/interfaces/componentInterfaces";

const Navbar = () => {
  return (
    <Box as="nav" bg="white" color="black" py={4} px={4} w="100%">
      <Flex justify="space-between" align="center" mx="auto" maxW="7xl">
        <Box>
          <NextLink href="/">
            <Link>
              <img className="h-9" src="logo.png" alt="logo" />
            </Link>
          </NextLink>
        </Box>
        <Flex display={{ base: "none", md: "flex" }} ml={4}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/transfers">Transfers</NavItem>
          <NavItem href="/tours">Tours</NavItem>
          <NavItem href="/poi">Places of Interest</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </Flex>
        <Flex display={{ base: "none", xl: "flex" }} align="center" ml={4}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              textAlign: "center",
              verticalAlign: "middle",
              border: "solid 1px",
              paddingTop: "9%",
              marginRight: 30,
            }}
          >
            <FaShoppingBasket
              className="icon"
              size={20}
              style={{
                marginLeft: "23%",
              }}
            />
          </div>

          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              textAlign: "center",
              verticalAlign: "middle",
              border: "solid 1px",
              paddingTop: "9%",
            }}
          >
            <IoPerson
              className="icon"
              size={20}
              style={{
                marginLeft: "23%",
              }}
            />
          </div>
        </Flex>
        <Box display={{ xl: "none" }}>{/* HamburgerIcon */}</Box>
      </Flex>
    </Box>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link mx={2} fontWeight="semibold" _hover={{ color: "gray.500" }}>
      {children}
    </Link>
  </NextLink>
);

export default Navbar;
