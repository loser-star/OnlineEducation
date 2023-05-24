// toolkit模式
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "../../services/module";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
