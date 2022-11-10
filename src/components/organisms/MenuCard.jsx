import {
  Box,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { memo } from "react";

export const MenuCard = memo(() => {
  return (
    <Box>
      <Flex
        bg="gray.200"
        align={"center"}
        w={"350px"}
        h={"100px"}
        justify={"space-around"}
        borderWidth="1px"
        borderRadius="30px"
      >
        <Image
          src="https://illustimage.com/photo/dl/401.png?20160705"
          h={"90%"}
          border={"1px"}
          borderColor={"gray.500"}
          borderRadius="10%"
        ></Image>
        <Box w={"50%"} padding={"5px"}>
          <Text textAlign={"center"} fontSize={"lg"} h={"50%"} mb={"8px"}>
            カレー
          </Text>
          <Box borderBottom={"2px"}></Box>
          <Text textAlign={"center"} fontSize={"lg"} h={"50%"} mt={"8px"}>
            300円
          </Text>
        </Box>
      </Flex>
    </Box>
  );
});
