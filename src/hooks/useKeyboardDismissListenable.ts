import { useEffect } from "react";
import { Keyboard } from "react-native";

export function useKeyboardDismissListenable(onDismiss: VoidCallback) {
  useEffect(() => {
    const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
      onDismiss();
      Keyboard.dismiss();
    });
    return () => {
      keyboardHide.remove();
    };
  }, [onDismiss]);
}
