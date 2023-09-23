/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";

import { LoginScreen } from "./src/screens/LoginScreen";
import { dataSource } from "./src/database/connection";

function App(): JSX.Element {
  useEffect(function initializeDb() {
    const connect = async () => {
      await dataSource.initialize();
    };

    connect();
  }, []);

  return <LoginScreen />;
}

export default App;
