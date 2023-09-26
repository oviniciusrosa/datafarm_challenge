import { useState } from "react";
import { View } from "react-native";
import { Button, Input, InputPassword, Typography } from "~/components/";

import LogoImg from "~/assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import { EntranceFadeIn } from "~/constants/EntranceFadeIn";

import * as S from "./styles";

const { Heading, SubHeading } = Typography;

export function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();

  return (
    <S.Container entering={EntranceFadeIn}>
      <View>
        <S.Logo source={LogoImg} resizeMode="contain" />
        <Heading style={{ marginBottom: 4 }}>Login</Heading>
        <SubHeading style={{ marginBottom: 46 }}>
          Acesse o aplicativo
        </SubHeading>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={{ marginBottom: 16 }}
        />
        <InputPassword
          label="Senha"
          value={password}
          onChangeText={setPassword}
          style={{ marginBottom: 32 }}
        />
        <Button onPress={() => navigation.navigate("Home")}>ENTRAR</Button>
      </View>

      <S.VersionText>1.0.0</S.VersionText>
    </S.Container>
  );
}
