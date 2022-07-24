import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../api/store";
import { User } from "../type";

export interface ToDoList {
  title: string;
  date: string;
  number: number;
}

interface AuthState {
  email: string;
  password: string;
  toDo: string;
  toDoList: ToDoList[];
}

const initialState: Partial<AuthState> = {};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state: Partial<AuthState>, action: PayloadAction<AuthState>) => {
      const user = action.payload;
      state.email = user.email;
      state.password = user.password;
    },
    clearUser: (state: Partial<AuthState>) => {
      state.email = "";
      state.password = "";
      state.toDoList = [];
    },
    setToDo: (state: Partial<AuthState>, action: PayloadAction<string>) => {
      const toDoTitle = action.payload;
      const theDate = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      if (state.toDoList !== undefined) {
        state.toDoList.push({
          title: toDoTitle,
          date: theDate,
          number: state.toDoList?.length + 1,
        });
      } else {
        state.toDoList = [];
        state.toDoList.push({
          title: toDoTitle,
          date: theDate,
          number: state.toDoList?.length + 1,
        });
      }
    },
    clearToDoListItem: (
      state: Partial<AuthState>,
      action: PayloadAction<number>
    ) => {
      state.toDoList = state.toDoList?.filter(
        (item) => item.number !== action.payload
      );
    },
  },
});

export const getUser = (state: RootState): Partial<AuthState> => {
  return state.authSlice;
};

// export const getToDoList = (state: RootState): ToDoList[] | undefined => {
//   return state.authSlice.toDoList;
// };

export const { clearUser, setUser, setToDo, clearToDoListItem } =
  authSlice.actions;

export default authSlice.reducer;
