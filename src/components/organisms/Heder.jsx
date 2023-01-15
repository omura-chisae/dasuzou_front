import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
export const Heder = memo(() => {
  return (
    <>
      <Flex
        justifyContent="space-evenly"
        height="10vh"
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.400"
        bgColor={"#f2f0eb"}
        opacity={"0.8"}
        _hover={{
          opacity: 1.0,
        }}
      >
        <Box>
          <Link to="./">
            <Text
              fontSize={{ base: "lg", md: "4xl" }}
              fontWeight="bold"
              textShadow={"0px 0px 2px white"}
            >
              ホーム
            </Text>
          </Link>
        </Box>
        <Box display="flex" m={"0px 15px"}>
          <Link to="Congestion" style={{ marginRight: "10vw" }}>
            <Text
              fontSize={{ base: "md", md: "3xl" }}
              textShadow={"0px 0px 2px white"}
            >
              混雑状況
            </Text>
          </Link>
          <Link to="menu">
            <Text
              fontSize={{ base: "md", md: "3xl" }}
              textShadow={"0px 0px 2px white"}
            >
              メニュー
            </Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
});
