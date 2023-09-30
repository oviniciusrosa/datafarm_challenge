/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";

import { dataSource } from "./src/database/connection";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import ResourcesProvider from "~/contexts/resources";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StopRunning } from "~/components";

function App(): JSX.Element {
  useEffect(function initializeDb() {
    const connect = async () => {
      await dataSource.initialize();
    };

    if (!dataSource.isInitialized) {
      connect();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ResourcesProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <StopRunning />
            <Routes />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ResourcesProvider>
    </ThemeProvider>
  );
}

export default App;
