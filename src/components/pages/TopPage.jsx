import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heder } from "../organisms/Heder";
import image from "../../images/mainVisual.jpeg";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatingTimes } from "../../redux/watingTimeSlice";
import { LoadingSpinner } from "../organisms/LoadingSpinner";

const menus = {"curry":"カレー", "noodle":"ラーメン", "aburasoba":"油そば", "sagamiharaLunch":"相模原ランチ", "soba":"そば・うどん", "teishoku":"特定食"};

export const TopPage = memo(() => {
  const [minimumTime, setMinimumtime] = useState(0);
  const [minimumMenu, setMinimumMenu] = useState("");
  const times = useSelector((state)=> state.waitingTimes.data);
  const loading = useSelector((state)=> state.waitingTimes.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatingTimes()).catch((error)=> console.log(error));
  }, []);

  useEffect(()=>{
    if(loading === "succeeded"){
      let minWait = 999999;
      let minMenu = "";
      Object.keys(menus).map((menu)=>{
        let wait =  Math.ceil(Number(times[menu]));
        if(minWait > wait){
          minWait = wait;
          minMenu = menu;
        }
      })
      setMinimumtime(minWait);
      setMinimumMenu(menus[minMenu]);
    }
  },[])

  return (
    <Box>
      <Box
        height="60vh"
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundPosition="center"
      >
        <Heder />
        {/* ../../images/mainVisual.jpeg */}
        {/* メインビジュアル */}
        <Box ml={5} mt="15vh">
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            bg="#f2f0eb"
            width="fit-content"
          >
            食堂の待ち時間確認サイト
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            width="fit-content"
            color={"white"}
          >
            {/* サイトの説明/ */}
          </Text>
        </Box>
      </Box>
      <Flex
        height={"15vh"}
        borderColor="black"
        borderWidth={"1px"}
        borderRadius={"15px"}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {loading !== "succeeded"
        ? <LoadingSpinner />
        : <>
            <Text fontSize={{ base: "sm", md: "lg" }} textAlign="center">
              最短での提供　待ち時間{minimumTime >= 100 ? "0" : minimumTime}分
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }} textAlign="center">
            {minimumMenu !== "" ? minimumMenu : "カレー"}
            </Text>
          </>
        }

      </Flex>

      {/* リンク群 */}
      <HStack justify="space-around" height="25vh">
        <Box width="50%" borderRight="2px">
          <Link to="/congestion">
            <Text fontSize="3xl" textAlign="center">
              混雑状況
            </Text>
          </Link>
        </Box>
        <Box width="50%">
          <Link to="menu">
            <Text fontSize="3xl" textAlign="center">
              メニュー
            </Text>
          </Link>
        </Box>
      </HStack>
    </Box>
  );
});
