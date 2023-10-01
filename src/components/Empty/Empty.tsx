import EmptyAnimation from "~/assets/lottie/empty.json";
import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

export function Empty() {
  return (
    <View>
      <LottieView
        autoPlay
        loop={false}
        source={EmptyAnimation}
        style={{
          width: 250,
          height: 250,
          alignSelf: "center",
        }}
      />

      <Text style={{ alignSelf: "center", fontSize: 16 }}>
        Nenhum registro cadastrado...
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 12 }}>
        Utilize o menu de navegação para registrar uma nova parada.
      </Text>
    </View>
  );
}
