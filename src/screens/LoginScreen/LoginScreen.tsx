import { Button } from "react-native";
import { Container } from "./styles";

export function LoginScreen({ navigation }) {
  return (
    <Container>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
}
