import { Keyboard, TextInputProps } from "react-native";
import * as S from "./styles";
import { useState } from "react";
import { useKeyboardDismissListenable } from "~/hooks/useKeyboardDismissListenable";

import theme from "~/theme";
import { useBorderColorAnimatedStyle } from "./hooks/useBorderColorAnimatedStyle";
import { useLabelAnimatedStyle } from "./hooks/useLabelAnimatedStyle";

interface Props extends TextInputProps {}

export function Input({ value, onChange, ...rest }: Props) {
  useKeyboardDismissListenable(removeFocus);

  const [focused, setFocused] = useState<boolean>(false);

  const [
    borderStyle,
    {
      initAnimation: initBorderAnimation,
      resetAnimation: resetBorderAnimation,
    },
  ] = useBorderColorAnimatedStyle();

  const [
    labelStyle,
    { initAnimation: initLabelAnimation, resetAnimation: resetLabelAnimation },
  ] = useLabelAnimatedStyle();

  function runAnimations() {
    initBorderAnimation();
    initLabelAnimation();
  }

  function resetAnimations() {
    resetBorderAnimation();
    resetLabelAnimation();
  }

  function requestFocus() {
    runAnimations();
    setFocused(true);
  }

  function removeFocus() {
    resetAnimations();
    setFocused(false);
    Keyboard.dismiss();
  }

  return (
    <>
      <S.InputWrapper style={borderStyle}>
        <S.Label style={labelStyle}>Email</S.Label>
        <S.InputContainer
          onFocus={requestFocus}
          onBlur={removeFocus}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </S.InputWrapper>
      {focused && <S.TouchableArea onPress={removeFocus} />}
    </>
  );
}
