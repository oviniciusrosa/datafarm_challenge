import { Keyboard, Text, TextInputProps } from "react-native";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useKeyboardDismissListenable } from "~/hooks/useKeyboardDismissListenable";

interface Props extends TextInputProps {}

export function Input() {
  useKeyboardDismissListenable(removeFocus);

  const [focused, setFocused] = useState<boolean>(false);

  function requestFocus() {
    setFocused(true);
  }

  function removeFocus() {
    setFocused(false);
    Keyboard.dismiss();
  }

  return (
    <>
      <S.InputWrapper>
        <Text>{focused.toString()}</Text>
        <S.InputContainer
          onFocus={requestFocus}
          onBlur={removeFocus}
          //   focused={focused}
        />
      </S.InputWrapper>
      {focused && <S.TouchableArea onPress={removeFocus} />}
    </>
  );
}
