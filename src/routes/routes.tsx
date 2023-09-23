import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { HomeTabs } from "./tabs/HomeTabs";
import { RootStackParamList } from "./@types/RootStackParamList";

const RootStack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
