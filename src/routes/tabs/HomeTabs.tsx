import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StopRegisterListScreen } from "../../screens/StopRegisterListScreen";
import { StopRegistrationScreen } from "../../screens/StopRegistrationScreen";

import * as Icons from "react-native-feather";
import theme from "~/theme";

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary_500,
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: theme.colors.white,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="StopRegisterList"
        component={StopRegisterListScreen}
        options={{
          tabBarIcon: ({ color }) => <Icons.Clock color={color} />,
        }}
      />
      <Tab.Screen
        name="StopRegistration"
        component={StopRegistrationScreen}
        options={{
          tabBarIcon: ({ color }) => <Icons.List color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
