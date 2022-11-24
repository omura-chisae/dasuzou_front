import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heder } from "../organisms/Heder";
import image from "../../images/mainVisual.jpeg";
import { memo } from "react";

export const TopPage = memo(() => {
  return (
    <Box>
      <Box
        height="60vh"
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundPosition="center"
      >
        <Heder />
        {/* ../../images/mainVisual.jpeg */}
        {/* メインビジュアル */}
        <Box ml={5} mt="15vh">
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            bg="gray"
            width="fit-content"
          >
            サイトのキャッチコピー
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            width="fit-content"
            color={"white"}
          >
            サイトの説明
          </Text>
        </Box>
      </Box>
      <Flex
        height={"15vh"}
        borderColor="black"
        borderWidth={"1px"}
        borderRadius={"15px"}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Text fontSize={{ base: "sm", md: "lg" }} textAlign="center">
          最短での提供　待ち時間3分
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} textAlign="center">
          カレー、カツカレー
        </Text>
      </Flex>

      {/* リンク群 */}
      <HStack justify="space-around" height="25vh">
        <Box width="50%" borderRight="2px">
          <Link to="/congestion">
            <Text fontSize="3xl" textAlign="center">
              混雑状況
            </Text>
          </Link>
        </Box>
        <Box width="50%">
          <Link to="menu">
            <Text fontSize="3xl" textAlign="center">
              メニュー
            </Text>
          </Link>
        </Box>
      </HStack>
    </Box>
  );
});
