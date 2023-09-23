import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StopRegisterListScreen } from "../../screens/StopRegisterListScreen";
import { StopRegistrationScreen } from "../../screens/StopRegistrationScreen";

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StopRegisterList" component={StopRegisterListScreen} />
      <Tab.Screen name="StopRegistration" component={StopRegistrationScreen} />
    </Tab.Navigator>
  );
}
