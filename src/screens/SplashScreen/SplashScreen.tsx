import React, { useEffect } from "react";

import { dataSource } from "~/database/connection";
import LogoImg from "~/assets/images/logo-white.png";

import * as S from "./styles";
import { useResources } from "~/contexts/resources";
import { useNavigation } from "@react-navigation/native";

export function SplashScreen() {
  const navigation = useNavigation();
  const { fillResources } = useResources();

  useEffect(() => {
    const connect = async () => {
      await dataSource.initialize();
      await fillResources();
    };

    if (!dataSource.isInitialized) {
      connect();

      /// TODO: Verificar se está autenticado
      setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);
    }
  }, []);

  return (
    <S.Container>
      <S.Logo source={LogoImg} resizeMode="contain" />
    </S.Container>
  );
}
