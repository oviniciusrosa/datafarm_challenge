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

function App(): JSX.Element {
  useEffect(function initializeDb() {
    const connect = async () => {
      await dataSource.initialize();
    };

    connect();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
