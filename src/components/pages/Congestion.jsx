import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { memo } from "react";
import { useLocation } from "react-router-dom";
import { WaitingTimeContext } from "../../context/WaitingTimeContext";
import { CongestionCard } from "../organisms/CongestionCard";
import { Heder } from "../organisms/Heder";

export const Congestion = memo(() => {
  const {state} = useLocation();
  // const waitingTime = state.waitTimes;
  const {waitTimes} = useContext(WaitingTimeContext);

  const menuAffiliation = [
    ["curry",["カレー", "カツカレー", "カレーライスセット", "カツカレーライスセット"]],
    ["teishoku",["かつ丼", "特定食A"]],
    ["sagamiharaLunch",["特定食B", "特定食C", "フィッシュランチ", "相模原ランチ"]],
    ["aburasoba",["油そば", "油そばセット"]],
    ["noodle",["ラーメン", "チャーシューメン", "ラーメンセット", "ラーメンフェア"]],
    ["soba",[
      "きつねそば",
      "たぬきうどん",
      "たぬきうどんセット",
      "きつねそばセット",
      "週替わりうどん",
      "週替わりそば",
    ]],
  ];

  return (
    <>
      <Heder bgColor={"#f2A444"} />
      <Box p={"0 10px"} height={"90vh"}>
        <Box padding={"10px 2%"} align="center">
          {menuAffiliation.map((menu, index) =>(
            <CongestionCard
              menu={menu[1]}
              time={waitTimes[menu[0]] ? Number(waitTimes[menu[0]]) : "-"}
              index={index}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );
});
