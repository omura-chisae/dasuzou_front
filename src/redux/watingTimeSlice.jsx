import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../env/firebaseConfig";

const menus = ["curry", "noodle", "aburasoba", "sagamiharaLunch", "soba", "teishoku"];
const sleep = ms => new Promise(res => setTimeout(res, ms))

export const fetchWatingTimes = createAsyncThunk("fetchWatingTimes", async () =>{
    let data = [];
    await menus.forEach(async(menu)=>{
        const collectionRef = query(collection(db,menu),orderBy("created_at","desc"), limit(1));
        await getDocs(collectionRef).then((snapshot)=>{
            snapshot.docs.forEach((doc,index)=>{
                const docData = doc.data();
                const minute = docData.minute;
                data[menu] = minute;
            })
        })
    });
    await sleep(1000);
    return data;
});

const initialState = {
    data:[],
    status:"idle",
    error:undefined
};

export const  watingTimeSlice = createSlice({
    name:"times",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWatingTimes.pending,(state)=>{
            state.status = "pending";
        });
        builder.addCase(fetchWatingTimes.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = "succeeded";
        });
        builder.addCase(fetchWatingTimes.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default watingTimeSlice.reducer;