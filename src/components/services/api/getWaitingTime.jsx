import { async } from "@firebase/util";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../env/firebaseConfig";

const menus = ["curry", "noodle", "aburasoba", "sagamiharaLunch", "soba", "teishoku"];

/**
 * 待ち時間を取得
 * @return {object}
 *  */
export const getWaitingTime = async(setWaitTimes, setMinimumtime, setMinimumMenu)=>{
    let data = [];
    let minimum = 100;
    let minimumMenu = "";
    await menus.forEach((menu)=>{
        const collectionRef = query(collection(db,menu),orderBy("created_at","desc"), limit(1));
        getDocs(collectionRef).then((snapshot)=>{
            snapshot.docs.forEach((doc,index)=>{
                const docData = doc.data();
                const minute = docData.minute;
                data[menu] = minute;
                //最小待ち時間
                if(minimum >= minute){
                    minimum = minute;
                    minimumMenu = menu;
                }
            })
        })
    });
    setWaitTimes(data);
    setMinimumtime(minimum);
    setMinimumMenu(minimumMenu);
};

export const getMinimumTime = () =>{

}


export const initialTimes = () =>{
    let initial = []
    menus.forEach((menu)=>{
        initial[menu] = 0
    })
    return initial;
}