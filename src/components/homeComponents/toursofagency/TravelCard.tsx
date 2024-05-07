"use client";
import { TravelCardProps } from "@/interfaces/componentInterfaces";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const TravelCard: React.FC<TravelCardProps> = ({ trip }) => {
  const [hover, setHover] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState("#2E1630");
  const [color, setColor] = React.useState("white");

  const handleEnter = () => {
    setHover(true);
    setBackgroundColor("white");
    setColor("#2E1630");
  };
  const handleExit = () => {
    setHover(false);
    setBackgroundColor("#2E1630");
    setColor("white");
  };
  return (
    <Box>
      <Box
        style={{
          border: "solid",
          borderRadius: "10px",
          borderWidth: "1px",
          minWidth: "200px",
          maxWidth: "1000px",
          height: 100,
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: backgroundColor,
          color: color,
          fontSize: 20,
          borderColor: "#2E1630",
          transition: "background-color 0.2s ease, color 0.2s ease",
        }}
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => handleExit()}
      >
        <Text>{trip}</Text>
      </Box>
    </Box>
  );
};

export default TravelCard;
