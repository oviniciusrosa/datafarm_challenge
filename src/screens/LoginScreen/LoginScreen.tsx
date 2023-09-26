import { Button, Input, Typography } from "~/components/";

import LogoImg from "~/assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

const { Heading, SubHeading } = Typography;

export function LoginScreen() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Logo source={LogoImg} resizeMode="contain" />
      <Heading style={{ marginBottom: 4 }}>Login</Heading>
      <SubHeading style={{ marginBottom: 16 }}>Acesse o aplicativo</SubHeading>

      <Input />

      <Button onPress={() => navigation.navigate("Home")}>ENTRAR</Button>
    </S.Container>
  );
}
