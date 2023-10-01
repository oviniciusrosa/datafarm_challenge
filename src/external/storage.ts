import { mmkv } from "./mmkv";

export const storage = {
  set: mmkv.set.bind(mmkv),
  getString: mmkv.getString.bind(mmkv),
  getNumber: mmkv.getNumber.bind(mmkv),
  getBoolean: mmkv.getBoolean.bind(mmkv),
  clearAll: mmkv.clearAll.bind(mmkv),
};
