import { Keyboard } from "react-native";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useKeyboardDismissListenable } from "~/hooks/useKeyboardDismissListenable";

import { useBorderColorAnimatedStyle } from "./hooks/useBorderColorAnimatedStyle";
import { useLabelAnimatedStyle } from "./hooks/useLabelAnimatedStyle";
import { InputProps } from "./@types";

export function Input({
  label,
  value,
  onChangeText,
  inputStyle,
  style,
  SuffixIcon = () => <></>,
  ...rest
}: InputProps) {
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
    if (!value) resetLabelAnimation();
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

  useEffect(() => {
    if (!!value) requestFocus();
  }, [value]);

  return (
    <>
      <S.InputWrapper style={[borderStyle, style]}>
        <S.Label style={labelStyle}>{label}</S.Label>
        <S.InputContainer
          {...rest}
          onFocus={requestFocus}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
        />
        <SuffixIcon />
      </S.InputWrapper>
      {focused && <S.TouchableArea onPress={removeFocus} />}
    </>
  );
}
