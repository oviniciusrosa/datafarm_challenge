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
        <Routes />
      </ResourcesProvider>
    </ThemeProvider>
  );
}

export default App;
