import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { CongestionCard } from "../organisms/CongestionCard";
import { Heder } from "../organisms/Heder";

export const Congestion = memo(() => {
  const menu1 = ["カレー", "カツカレー"];
  const picture1 = "https://illustimage.com/photo/dl/401.png?20160705";
  const waitingTime = "60";
  const i = [1, 2, 3, 4];

  return (
    <>
      <Heder bgColor={"#f2A444"} />
      <Box p={"0 10px"} height={"90vh"}>
        <Box padding={"10px 2%"} align="center">
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
          <CongestionCard picture={picture1} menu={menu1} time={waitingTime} />
        </Box>
      </Box>
    </>
  );
});
