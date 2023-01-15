import { configureStore } from "@reduxjs/toolkit";
import watingTimeReducer from "./watingTimeSlice";

export const store = configureStore({
    reducer:{
        waitingTimes:watingTimeReducer
    },
});