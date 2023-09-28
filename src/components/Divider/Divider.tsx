import { View } from "react-native";
import theme from "~/theme";

export function Divider() {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        marginVertical: 10,
        backgroundColor: theme.colors.grey_50,
      }}
    />
  );
}
