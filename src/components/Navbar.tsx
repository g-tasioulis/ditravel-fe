"use client";
import {
  Box,
  Flex,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import NextLink from "next/link";
import React from "react";
import "./navbar.css";
import { NavItemProps } from "@/interfaces/componentInterfaces";
import { usePathname } from "next/navigation";

const NavItem: React.FC<NavItemProps & { isActive: boolean }> = ({
  href,
  children,
  isActive,
}) => (
  <NextLink href={href} passHref>
    <Text
      mx={2}
      fontWeight={isActive ? "semibold" : "normal"}
      borderBottom={isActive ? "1px solid" : "none"}
      borderColor="black"
      _hover={{ color: "gray.500" }}
    >
      {children}
    </Text>
  </NextLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Box as="nav" bg="white" color="black" py={4} px={4} w="100%">
      <Flex justify="space-between" align="center" mx="auto" maxW="7xl">
        <Box>
          <NextLink href="/">
            <div>
              <img className="h-9" src="logo.png" alt="logo" />
            </div>
          </NextLink>
        </Box>
        <Flex display={{ base: "none", md: "flex" }} ml={4}>
          <NavItem href="/" isActive={isActive("/")}>
            Home
          </NavItem>
          <NavItem href="/about" isActive={isActive("/about")}>
            About
          </NavItem>
          <NavItem href="/transfers" isActive={isActive("/transfers")}>
            Transfers
          </NavItem>
          <NavItem href="/tours" isActive={isActive("/tours")}>
            Tours
          </NavItem>
          <NavItem href="/poi" isActive={isActive("/poi")}>
            Places of Interest
          </NavItem>
          <NavItem href="/contact" isActive={isActive("/contact")}>
            Contact
          </NavItem>
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
        {/* HamburgerIcon for small screens */}
        <IconButton
          display={{ base: "flex", xl: "none" }}
          icon={<FaBars />}
          aria-label="Menu"
          onClick={onOpen}
        />
        {/* Side Drawer for mobile screens */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column">
                  <NavItem href="/" isActive={isActive("/")}>
                    Home
                  </NavItem>
                  <NavItem href="/about" isActive={isActive("/about")}>
                    About
                  </NavItem>
                  <NavItem href="/transfers" isActive={isActive("/transfers")}>
                    Transfers
                  </NavItem>
                  <NavItem href="/tours" isActive={isActive("/tours")}>
                    Tours
                  </NavItem>
                  <NavItem href="/poi" isActive={isActive("/poi")}>
                    Places of Interest
                  </NavItem>
                  <NavItem href="/contact" isActive={isActive("/contact")}>
                    Contact
                  </NavItem>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
