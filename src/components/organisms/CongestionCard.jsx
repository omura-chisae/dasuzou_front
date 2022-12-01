import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";

export const CongestionCard = memo((props) => {
  const { picture, menu, time } = props;
  return (
    <>
      <Box alignItems="center" mb={5}>
        <Stack
          padding={"10px 20px"}
          direction={"row"}
          spacing={"10px"}
          bg={"gray.200"}
          h={{ base: "150px", xl: "15vh" }}
          w={"100%"}
          borderWidth="1px"
          borderRadius="10px"
          shadow={"md"}
          justifyContent="space-evenly"
        >
          {/* <Image
            objectFit={"cover"}
            boxSize={"100%"}
            src={picture}
            width={"90px"}
            height={"90px"}
          /> */}
          <Box w={"100%"} alignItems="center">
            <Stack
              h={"50%"}
              align="center"
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Text
                fontWeight={600}
                color={"black.500"}
                fontSize={{ base: "md", md: "3xl" }}
                w={"fit-content"}
              >
                メニュー
              </Text>
              <Wrap justify={"center"}>
                {menu.map((element) => (
                  <WrapItem>
                    <Text fontSize={{ base: "md", md: "xl" }}>　{element}</Text>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>

            <Box borderBottom={"2px"} w={"100%"}></Box>

            <Stack
              h={"50%"}
              align="center"
              direction={"row"}
              justifyContent="space-between"
            >
              <Text
                fontWeight={600}
                color={"black.500"}
                fontSize={{ base: "md", md: "3xl" }}
              >
                待ち時間　
              </Text>
              <Text
                fontSize={{ base: "md", md: "2xl" }}
                color={"red.500"}
                mb={4}
                m={0}
              >
                {time}分
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
});
