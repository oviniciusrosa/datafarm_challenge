import React, { useCallback, useEffect } from "react";

import { dataSource } from "~/database/connection";
import LogoImg from "~/assets/images/logo-white.png";

import * as S from "./styles";
import { useResources } from "~/contexts/resources";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "~/contexts/authentication";

export function SplashScreen() {
  const navigation = useNavigation();
  const { fillResources } = useResources();
  const { isAuthenticated } = useAuth();

  const handleNavigate = useCallback(() => {
    if (isAuthenticated) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [isAuthenticated]);

  const initialize = useCallback(async () => {
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }

    await fillResources();

    setTimeout(handleNavigate, 1000);
  }, [handleNavigate]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <S.Container>
      <S.Logo source={LogoImg} resizeMode="contain" />
    </S.Container>
  );
}
