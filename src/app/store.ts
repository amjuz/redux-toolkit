import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: counterSlice
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['dispatch']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
ThunkReturnType,
RootState,
unknown,
Action
>

