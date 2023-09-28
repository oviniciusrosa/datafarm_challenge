import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import * as Icon from "react-native-feather";
import theme from "~/theme";

import * as S from "./styles";

const { colors } = theme;

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchInput({
  style,
  placeholder,
  value,
  onChangeText,
  ...rest
}: Props) {
  return (
    <S.Container style={style}>
      <Icon.Search
        color={colors.grey_80}
        width={20}
        style={{ marginRight: 10 }}
      />
      <S.Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </S.Container>
  );
}
