import { proxy } from "valtio";
import { User } from "../types/types";

type UserState = {
  user: User | null;
};

export const userState = proxy<UserState>({ user: null });

export const logIn = (user: User) => {
  userState.user = user;
};

export const logOut = () => {
  userState.user = null;
};
