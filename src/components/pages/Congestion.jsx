import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { CongestionCard } from "../organisms/CongestionCard";
import { Heder } from "../organisms/Heder";

export const Congestion = memo(() => {
  const waitingTime = [10, 20, 30, 40, 50];

  const menuAffiliation = [
    ["カレー", "カツカレー", "カレーライスセット", "カツカレーライスセット"],
    ["かつ丼", "特定食A"],
    ["特定食B", "特定食C", "フィッシュランチ", "相模原ランチ"],
    ["油そば", "油そばセット"],
    ["ラーメン", "チャーシューメン", "ラーメンセット", "ラーメンフェア"],
    [
      "きつねそば",
      "たぬきうどん",
      "たぬきうどんセット",
      "きつねそばセット",
      "週替わりうどん",
      "週替わりそば",
    ],
  ];

  return (
    <>
      <Heder bgColor={"#f2A444"} />
      <Box p={"0 10px"} height={"90vh"}>
        <Box padding={"10px 2%"} align="center">
          {menuAffiliation.map((menus, index) => (
            <CongestionCard
              menu={menus}
              time={waitingTime[index]}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );
});
