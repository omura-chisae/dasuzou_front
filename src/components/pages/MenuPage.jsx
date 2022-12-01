import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { Heder } from "../organisms/Heder";
import { MenuCard } from "../organisms/MenuCard";
import image from "../../../src/images/menu/abura/abura.jpg";
const abura = "a";
export const MenuPage = memo(() => {
  const menus = [
    {
      type: "カレー",
      menu: [
        { name: "カレーセット", cost: 340, pic: { image } },
        { name: "カツカレーセット", cost: 440, pic: { abura } },
      ],
    },
    {
      type: "定食",
      menu: [
        { name: "かつ丼", cost: 400, pic: { abura } },
        { name: "特定食A", cost: 530, pic: { abura } },
        { name: "特定食B", cost: 550, pic: { abura } },
        { name: "特定食C", cost: 600, pic: { abura } },
        { name: "フィッシュランチ", cost: 460, pic: { abura } },
        { name: "相模原ランチ", cost: 440, pic: { abura } },
      ],
    },
    {
      type: "ラーメン",
      menu: [
        { name: "ラーメン", cost: 280, pic: { abura } },
        { name: "チャーシューメン", cost: 400, pic: { abura } },
        { name: "油そば", cost: 400, pic: { abura } },
        { name: "ラーメンフェア", cost: 420, pic: { abura } },
        { name: "ラーメンセット", cost: 440, pic: { abura } },
        { name: "油そばセット", cost: 530, pic: { abura } },
      ],
    },
    {
      type: "うどん・そば",
      menu: [
        { name: "きつねそば", cost: 270, pic: { abura } },
        { name: "たぬきうどん", cost: 270, pic: { abura } },
        { name: "たぬきうどんセット", cost: 430, pic: { abura } },
        { name: "きつねそばセット", cost: 430, pic: { abura } },
        { name: "週替わりうどん", cost: 400, pic: { abura } },
        { name: "週替わりそば", cost: 400, pic: { abura } },
      ],
    },
  ];
  console.log(menus);
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
                    pic={menu.pic}
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
