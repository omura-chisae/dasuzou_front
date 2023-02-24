import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchWatingTimes } from "../../redux/watingTimeSlice";
import { CongestionCard } from "../organisms/CongestionCard";
import { Heder } from "../organisms/Heder";
import { LoadingSpinner } from "../organisms/LoadingSpinner";

export const Congestion = memo(() => {
  const {state} = useLocation();
  const dispatch = useDispatch();
  const times = useSelector((state)=> state.waitingTimes.data);
  const loading = useSelector((state)=> state.waitingTimes.status);
  const error = useSelector((state)=> state.waitingTimes.error);

  useEffect(() => {
    dispatch(fetchWatingTimes()).catch((error)=> console.log(error));
  }, []);
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
          {loading != "succeeded"
          ? <LoadingSpinner />
          : ( error != undefined
            ? <Text>エラーが発生しました。</Text>
            :menuAffiliation.map((menu, index) =>{
            return (
              <CongestionCard
                menu={menu[1]}
                time={times[menu[0]] != undefined ? Math.ceil(Number(times[menu[0]])) : "-"}
                index={index}
                key={index}
              />
            )}))}
        </Box>
      </Box>
    </>
  );
});
