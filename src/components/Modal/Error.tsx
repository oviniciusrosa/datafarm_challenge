import { Dimensions, Text } from "react-native";
import * as S from "./styles";
import { ModalWrapper } from "./ModalWrapper";

import ErrorAnimation from "~/assets/lottie/error.json";

import LottieView from "lottie-react-native";
import { useShakeAnimatedStyle } from "./hooks/useShakeAnimatedStyle";
import { useEffect } from "react";
import { OutlineButton } from "../Button";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface Props {
  open: boolean;
  onClose: VoidCallback;
  message: string;
}

const BUTTON_WIDTH = SCREEN_WIDTH * 0.85 - 20;

export function Error({ open, onClose, message }: Props) {
  const [animatedStyle, { initAnimation }] = useShakeAnimatedStyle();

  useEffect(() => {
    if (open) initAnimation();
  }, [open]);

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <S.Card style={animatedStyle}>
        {open && (
          <LottieView
            autoPlay
            loop={false}
            source={ErrorAnimation}
            style={{
              width: 150,
              height: 150,
              alignSelf: "center",
            }}
          />
        )}
        <S.ErrorTitle>Ops! Erro inesperado...</S.ErrorTitle>
        <Text>{message}</Text>
        <OutlineButton
          onPress={onClose}
          style={{ width: BUTTON_WIDTH, marginTop: 20 }}>
          Confirmar
        </OutlineButton>
      </S.Card>
    </ModalWrapper>
  );
}
