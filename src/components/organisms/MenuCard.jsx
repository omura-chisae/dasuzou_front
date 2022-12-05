import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import curry from "../../images/menu/curry/curry.jpg";
import katuCurry from "../../images/menu/curry/katsu_curry.jpg";
import katu from "../../images/menu/katsuA/katsu-don.jpg";
import teishokuA from "../../images/menu/katsuA/A.jpeg";
import teishokuB from "../../images/menu/BCfish/B.jpeg";
import teishokuC from "../../images/menu/BCfish/C.jpeg";
import fish from "../../images/menu/BCfish/fish.jpeg";
import sagamihara from "../../images/menu/BCfish/sagami.jpeg";
import ramen from "../../images/menu/ra-men/ra-men.jpg";
import chashu from "../../images/menu/ra-men/chashu_men.jpg";
import ramenFair from "../../images/menu/ra-men/ra-men_fair.jpg";
import abura from "../../images/menu/abura/abura.jpg";
import aburaSet from "../../images/menu/abura/abura-set.jpg";
import udon from "../../images/menu/udon_soba/udon.jpg";
import soba from "../../images/menu/udon_soba/soba.jpg";
import weeklyUdon from "../../images/menu/udon_soba/weekly_udon.jpg";
import weeklySoba from "../../images/menu/udon_soba/weekly_soba.jpg";

export const MenuCard = memo((props) => {
  const { name, cost, index } = props;
  const images = [
    curry,
    katuCurry,
    katu,
    teishokuA,
    teishokuB,
    teishokuC,
    fish,
    sagamihara,
    abura,
    aburaSet,
    ramen,
    chashu,
    ramenFair,
    ramen,
    udon,
    soba,
    udon,
    soba,
    weeklyUdon,
    weeklySoba,
  ];

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
          src={images[index]}
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
