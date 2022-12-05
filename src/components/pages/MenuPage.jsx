import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { Heder } from "../organisms/Heder";
import { MenuCard } from "../organisms/MenuCard";

export const MenuPage = memo(() => {
  const menus = [
    {
      type: "カレー",
      menu: [
        { name: "カレーセット", cost: 340, index: 0 },
        { name: "カツカレーセット", cost: 440, index: 1 },
      ],
    },
    {
      type: "定食",
      menu: [
        { name: "かつ丼", cost: 400, index: 2 },
        { name: "特定食A", cost: 530, index: 3 },
        { name: "特定食B", cost: 550, index: 4 },
        { name: "特定食C", cost: 600, index: 5 },
        { name: "フィッシュランチ", cost: 460, index: 6 },
        { name: "相模原ランチ", cost: 440, index: 7 },
      ],
    },
    {
      type: "油そば",
      menu: [
        { name: "油そば", cost: 400, index: 8 },
        { name: "油そばセット", cost: 530, index: 9 },
      ],
    },
    {
      type: "ラーメン",
      menu: [
        { name: "ラーメン", cost: 280, index: 10 },
        { name: "チャーシューメン", cost: 400, index: 11 },
        { name: "ラーメンフェア", cost: 420, index: 12 },
        { name: "ラーメンセット", cost: 430, index: 13 },
      ],
    },

    {
      type: "うどん・そば",
      menu: [
        { name: "たぬきうどん", cost: 270, index: 14 },
        { name: "きつねそば", cost: 270, index: 15 },
        { name: "たぬきうどんセット", cost: 430, index: 16 },
        { name: "きつねそばセット", cost: 430, index: 17 },
        { name: "週替わりうどん", cost: 400, index: 18 },
        { name: "週替わりそば", cost: 400, index: 19 },
      ],
    },
  ];

  return (
    <>
      <Heder />
      <Box
        padding={{ base: "10px 0", md: "10px 10px" }}
        height={"100vh"}
        // bgImage={image}
      >
        {menus.map((element) => (
          <Box mb={"15px"} key={element.type}>
            <Text as={"u"} fontSize={"xl"}>
              {element.type}
            </Text>
            <Wrap spacing={"20px"} justify="left">
              {element.menu.map((menu) => (
                <WrapItem justify={"center"}>
                  <MenuCard
                    name={menu.name}
                    cost={menu.cost}
                    index={menu.index}
                    key={menu.name}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Box>
    </>
  );
});
