import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { Heder } from "../organisms/Heder";
import { MenuCard } from "../organisms/MenuCard";

export const MenuPage = memo(() => {
  const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heder />
      <Box padding={"10px 5%"} height={"100vh"}>
        <Wrap spacing={"50px"} justify="center">
          {i.map((element) => (
            <WrapItem>
              <MenuCard />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
});
