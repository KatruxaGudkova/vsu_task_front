// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {User} from "../types";

// const initialState: User.UserState = {
//   user: {
//     id: "",
//     username: "",
//     role: "",
//   },
//   isAuth: false,
//   isLoading: false,
//   error: null,
// };

// const tableSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     userStart: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     setUser: (state, action: PayloadAction<User.IUser>) => {
//       state.user = {...state.user, ...action.payload};
//       state.isAuth = true;
//       state.isLoading = false;
//     },
//     deleteUser: (state) => {
//       state.user = {id: "", username: "", role: ""};
//       state.isAuth = false;
//       state.isLoading = false;
//     },
//     userFailure: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
// });

// export const {userStart, setUser, deleteUser, userFailure, clearError} =
//   tableSlice.actions;
// export default tableSlice.reducer;
