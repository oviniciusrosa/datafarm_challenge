import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Input, InputPassword, Typography } from "~/components/";

import LogoImg from "~/assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import { EntranceFadeIn } from "~/constants/EntranceFadeIn";

import * as S from "./styles";
import { useAuth } from "~/contexts/authentication";
import { Modal } from "~/components/Modal";
import { useApi } from "~/hooks/services/useApi";
import { useLoginApi } from "./hooks/useLoginApi";
import { useResources } from "~/contexts/resources";
import { useFillResources } from "./hooks/useFillResources";

const { Heading, SubHeading } = Typography;

export function LoginScreen() {
  const {
    login,
    loading: loadingAuthentication,
    error: errorToAuthenticate,
  } = useLoginApi();

  const {
    loading: loadingResources,
    error: errorToFillResources,
    getResourcesFromAPI,
  } = useFillResources();

  const { authenticate } = useAuth();
  const navigation = useNavigation();

  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isLoading: boolean = loadingResources || loadingAuthentication;

  async function submit() {
    if (email === "" || password === "") {
      return setErrorModal(true);
    }

    const { data } = await login({ email, senha: password, idPartner: 372 });

    if (!!data) {
      authenticate(data.token);
      await getResourcesFromAPI();
      navigation.navigate("Home");
    }
  }

  useEffect(() => {
    if (!!errorToAuthenticate || errorToFillResources) setErrorModal(true);
  }, [errorToAuthenticate, errorToFillResources]);

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
        <Button onPress={submit}>ENTRAR</Button>
      </View>

      <S.VersionText>1.0.0</S.VersionText>

      <Modal.Error
        open={errorModal}
        onClose={() => setErrorModal(false)}
        message="Não foi possível efetuar a autenticação dos dados. Verifique suas credenciais!"
      />

      <Modal.Loading open={isLoading} />
    </S.Container>
  );
}
