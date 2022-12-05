import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import curry from "../../images/menu/curry/curry.jpg";
import katu from "../../images/menu/katsuA/katsu-don.jpg";
import teishokuB from "../../images/menu/BCfish/B.jpeg";
import abura from "../../images/menu/abura/abura.jpg";

import ramen from "../../images/menu/ra-men/ra-men.jpg";
import udon from "../../images/menu/udon_soba/udon.jpg";

export const CongestionCard = memo((props) => {
  const { index, menu, time } = props;
  const images = [curry, katu, teishokuB, abura, ramen, udon];
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
          <Image
            src={images[index]}
            h={"90%"}
            border={"1px"}
            borderColor={"gray.500"}
            borderRadius="5px"
          />
          <Box w={"100%"} alignItems="center">
            <Stack
              h={"50%"}
              align="center"
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Text
                width={"120px"}
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
