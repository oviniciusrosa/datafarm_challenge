import { mmkv } from "./mmkv";

export const storage = {
  set: mmkv.set,
  getString: mmkv.getString,
  getNumber: mmkv.getNumber,
  getBoolean: mmkv.getBoolean,
};
