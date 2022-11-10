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
        // _hover={{
        //   background: "#6C5D36",
        //   opacity: 0.8,
        // }}
      >
        <Box>
          <Link to="/">
            <Text fontSize="4xl">サイト名</Text>
          </Link>
        </Box>
        <Box display="flex" m={"0px 15px"}>
          <Link to="/Congestion" style={{ marginRight: "10vh" }}>
            <Text fontSize="3xl">混雑状況</Text>
          </Link>
          <Link to="/menu">
            <Text fontSize="3xl">メニュー</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
});
