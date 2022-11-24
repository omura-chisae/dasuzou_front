import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

export const MenuCard = memo((props) => {
  const { name, cost } = props;
  return (
    <Box>
      <Flex
        padding={"5px"}
        bg="gray.200"
        align={"center"}
        w={{ base: "150px", md: "250px" }}
        h={"100px"}
        justify={"space-around"}
        borderWidth="1px"
        borderRadius="10px"
        shadow={"md"}
      >
        <Image
          src="https://illustimage.com/photo/dl/401.png?20160705"
          h={"90%"}
          border={"1px"}
          borderColor={"gray.500"}
          borderRadius="5px"
        ></Image>
        <Box w={"50%"} padding={"5px"}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "sm", md: "lg" }}
            h={"50%"}
            mb={"8px"}
          >
            {name}
          </Text>
          <Box borderBottom={"2px"}></Box>
          <Text
            textAlign={"center"}
            fontSize={{ base: "md", md: "xl" }}
            h={"50%"}
            mt={"8px"}
          >
            {cost}円
          </Text>
        </Box>
      </Flex>
    </Box>
  );
});
