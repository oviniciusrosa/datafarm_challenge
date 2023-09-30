import { useEffect } from "react";
import { Keyboard } from "react-native";

export function useKeyboardOpenedListenable(onOpen: VoidCallback) {
  useEffect(() => {
    const keyboardHide = Keyboard.addListener("keyboardDidShow", () => {
      onOpen();
    });
    return () => {
      keyboardHide.remove();
    };
  }, [onOpen]);
}
