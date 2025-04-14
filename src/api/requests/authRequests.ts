// import {Action, ThunkAction} from "@reduxjs/toolkit";
// import {axiosInstanceUser} from "../axiosInstance";

// import {RootState} from "../../store";
// import {User} from "../../types";
// import {
//   deleteUser,
//   setUser,
//   userFailure,
//   userStart,
// } from "../../slices/userSlice";
// import {AxiosError} from "axios";

// type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// const login = (username: string, password: string): AppThunk => {
//   return async (dispatch) => {
//     dispatch(userStart());
//     try {
//       const response = await axiosInstanceUser.post<User.IUserResponse>(
//         "/login",
//         {
//           username,
//           password,
//         }
//       );
//       if (response.data.accessToken.length !== 0 && response.data.user) {
//         localStorage.setItem("accessToken", response.data.accessToken);
//         dispatch(setUser(response.data.user));
//       } else {
//         localStorage.removeItem("accessToken");
//         dispatch(deleteUser());
//         console.warn("checkAuth access token not found");
//       }
//     } catch (error: any) {
//       dispatch(deleteUser());
//       dispatch(
//         userFailure(
//           error instanceof AxiosError
//             ? error.response?.data.message
//             : "Произошла ошибка"
//         )
//       );
//     }
//   };
// };

// const logout = (): AppThunk => {
//   return async (dispatch) => {
//     dispatch(userStart());
//     try {
//       await axiosInstanceUser.post<User.IUser>("/logout", {});
//     } catch (error: any) {
//       dispatch(
//         userFailure(
//           error instanceof AxiosError
//             ? error.response?.data.message
//             : "Произошла ошибка"
//         )
//       );
//     } finally {
//       dispatch(deleteUser());
//       localStorage.removeItem("accessToken");
//     }
//   };
// };

// const checkAuth = (): AppThunk => {
//   return async (dispatch) => {
//     dispatch(userStart());
//     try {
//       const response = await axiosInstanceUser.get<User.IUserResponse>(
//         "/refresh"
//       );
//       if (response.data.accessToken.length !== 0 && response.data.user) {
//         localStorage.setItem("accessToken", response.data.accessToken);
//         dispatch(setUser(response.data.user));
//       } else {
//         localStorage.removeItem("accessToken");
//         dispatch(deleteUser());
//         console.warn("checkAuth access token not found");
//       }
//     } catch (error: any) {
//       dispatch(
//         userFailure(
//           error instanceof AxiosError
//             ? error.response?.data.message
//             : "Произошла ошибка"
//         )
//       );
//     }
//   };
// };

// export {login, logout, checkAuth};
