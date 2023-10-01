import { Text } from "react-native";
import * as S from "./styles";
import { ReactElement } from "react";

interface Props {
  open: boolean;
  onClose: VoidCallback;
  children: ReactElement | ReactElement[];
}

export function ModalWrapper({ open, onClose, children }: Props) {
  return (
    <S.ModalContainer
      visible={open}
      transparent
      onRequestClose={onClose}
      animationType="fade">
      <S.Overlay onPress={onClose}>{children}</S.Overlay>
    </S.ModalContainer>
  );
}
