import { Text, TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  children: string;
  onPress: VoidCallback;
}

export function Button({ children, onPress, ...rest }: Props) {
  return (
    <S.Button onPress={onPress} activeOpacity={0.7} {...rest}>
      <S.Label>{children}</S.Label>
    </S.Button>
  );
}

export function OutlineButton({ children, onPress, ...rest }: Props) {
  return (
    <S.OutlineButton onPress={onPress} activeOpacity={0.7} {...rest}>
      <S.OutlineLabel>{children}</S.OutlineLabel>
    </S.OutlineButton>
  );
}
