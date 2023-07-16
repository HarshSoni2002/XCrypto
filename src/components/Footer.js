import { Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import p from "../assets/pic.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} alignItems={"center"} h={"full"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Best crypto trading app.
          </Text>
        </VStack>
        <VStack>
          {/* <Avatar boxSize={"28"} mt={["4", "0"]} /> */}
          <img
            src={p}
            alt="pic"
            width={"80px"}
            height={"80px"}
            textAlign={"center"}
          />
          <Text textAlign={"center"}>Harsh_Soni</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
