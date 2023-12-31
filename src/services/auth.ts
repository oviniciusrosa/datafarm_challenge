import { storage } from "~/external/storage";
import { JWTTOKEN_KEYNAME } from "~/constants/LocalStorageKeys";

export const getJwtToken = () => storage.getString(JWTTOKEN_KEYNAME);

export const saveToken = (token: string) => {
  storage.set(JWTTOKEN_KEYNAME, token);
};
