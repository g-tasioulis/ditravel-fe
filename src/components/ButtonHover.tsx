import { ButtonProps } from "@/interfaces/componentInterfaces";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ButtonHover: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <Button
      className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
      _hover={{ ".bg-red-700": { width: "full" } }}
    >
      <Box className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></Box>
      <Text className="relative text-black group-hover:text-white">
        {buttonText}
      </Text>
    </Button>
  );
};

export default ButtonHover;
