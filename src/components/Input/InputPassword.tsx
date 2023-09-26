import { useState } from "react";
import * as Icon from "react-native-feather";
import { Input } from "./Input";
import { InputProps } from "./@types";
import theme from "~/theme";

import * as S from "./styles";

const { colors } = theme;

export function InputPassword(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function changeVisibility() {
    setShowPassword(prev => !prev);
  }

  return (
    <>
      <Input
        {...props}
        inputStyle={{ paddingRight: 40 }}
        secureTextEntry={!showPassword}
        SuffixIcon={() => (
          <S.TouchableSuffix activeOpacity={0.7} onPress={changeVisibility}>
            {showPassword ? (
              <Icon.EyeOff color={colors.grey_80} width={20} />
            ) : (
              <Icon.Eye color={colors.grey_80} width={20} />
            )}
          </S.TouchableSuffix>
        )}
      />
    </>
  );
}
