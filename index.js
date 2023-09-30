/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import "reflect-metadata";
import "react-native-gesture-handler";
import "react-native-get-random-values";

AppRegistry.registerComponent(appName, () => App);
