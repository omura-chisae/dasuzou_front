import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { Heder } from "../organisms/Heder";
import { MenuCard } from "../organisms/MenuCard";

export const MenuPage = memo(() => {
  const menus = [
    {
      type: "カレー",
      menu: [
        { name: "カレー", cost: 100 },
        { name: "カツカレー", cost: 100 },
        { name: "カレーセット", cost: 100 },
        { name: "カツカレーセット", cost: 100 },
      ],
    },
    {
      type: "定食",
      menu: [
        { name: "かつ丼", cost: 100 },
        { name: "特定食A", cost: 530 },
        { name: "特定食B", cost: 550 },
        { name: "特定食C", cost: 600 },
        { name: "フィッシュランチ", cost: 460 },
        { name: "相模原ランチ", cost: 440 },
      ],
    },
    {
      type: "ラーメン",
      menu: [
        { name: "ラーメン", cost: 100 },
        { name: "チャーシューメン", cost: 100 },
        { name: "油そば", cost: 100 },
        { name: "ラーメンフェア", cost: 420 },
        { name: "ラーメンセット", cost: 100 },
        { name: "油そばセット", cost: 100 },
      ],
    },
    {
      type: "うどん・そば",
      menu: [
        { name: "きつねそば", cost: 100 },
        { name: "たぬきうどん", cost: 100 },
        { name: "たぬきうどんセット", cost: 100 },
        { name: "きつねそばセット", cost: 100 },
        { name: "週替わりうどん", cost: 400 },
        { name: "週替わりそば", cost: 400 },
      ],
    },
  ];
  console.log(menus);
  return (
    <>
      <Heder />
      <Box padding={{ base: "10px 0", md: "10px 10px" }} height={"100vh"}>
        {menus.map((element) => (
          <Box mb={"15px"} key={element.type}>
            <Text as={"u"} fontSize={"xl"}>
              {element.type}
            </Text>
            <Wrap spacing={"20px"} justify="left">
              {element.menu.map((menu) => (
                <WrapItem justify={"center"}>
                  <MenuCard name={menu.name} cost={menu.cost} key={menu.name} />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Box>
    </>
  );
});
