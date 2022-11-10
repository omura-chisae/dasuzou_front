import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

export const CongestionCard = memo((props) => {
  const { picture, menu, time } = props;
  return (
    <>
      <Box alignItems="center" mb={5}>
        <Stack
          padding={"10px 15%"}
          direction={"row"}
          spacing={"10px"}
          bg="gray.200"
          align={"center"}
          h={"100px"}
          w={"100%"}
          justify={"space-evenly"}
          borderWidth="1px"
          borderRadius="30px"
        >
          <Image
            objectFit={"cover"}
            boxSize={"100%"}
            src={picture}
            width={"90px"}
            height={"90px"}
          />
          <Box alignItems={"center"}>
            <Flex h={"50%"}>
              <Text fontWeight={600} color={"black.500"} fontSize="xl">
                メニュー
              </Text>

              {menu.map((element) => (
                <Text>　{element}</Text>
              ))}
            </Flex>

            <Box borderBottom={"2px"}></Box>
            <Flex h={"50%"}>
              <Text fontWeight={600} color={"black.500"} fontSize="xl">
                待ち時間　
              </Text>
              <Text fontSize={"xl"} color={"red.500"} mb={4} m={0}>
                {time}分
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
});
