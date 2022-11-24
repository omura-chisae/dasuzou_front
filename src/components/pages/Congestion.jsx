import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { CongestionCard } from "../organisms/CongestionCard";
import { Heder } from "../organisms/Heder";

export const Congestion = memo(() => {
  const picture1 = "https://illustimage.com/photo/dl/401.png?20160705";
  const waitingTime = [10, 20, 30, 40, 50];

  const menuAffiliation = [
    ["カレー", "カツカレー", "カレーライスセット", "カツカレーライスセット"],
    ["かつ丼", "特定食A"],
    ["特定食B", "特定食C", "フィッシュランチ", "相模原ランチ"],
    [
      "ラーメン",
      "チャーシューメン",
      "油そば",
      "ラーメンセット",
      "油そばセット",
      "ラーメンフェア",
    ],
    [
      "きつねそば",
      "たぬきうどん",
      "たぬきうどんセット",
      "きつねそばセット",
      "週替わりうどん",
      "週替わりそば",
    ],
  ];
  console.log(menuAffiliation);
  return (
    <>
      <Heder bgColor={"#f2A444"} />
      <Box p={"0 10px"} height={"90vh"}>
        <Box padding={"10px 2%"} align="center">
          {menuAffiliation.map((menus, index) => (
            <CongestionCard
              picture={picture1}
              menu={menus}
              time={waitingTime[index]}
            />
          ))}

          {/* <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} /> */}
        </Box>
      </Box>
    </>
  );
});
