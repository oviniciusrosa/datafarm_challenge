import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { EntranceFadeIn } from "~/constants/EntranceFadeIn";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export const Container = styled(Animated.View).attrs({
  entering: EntranceFadeIn,
})`
  padding-top: 25px;
  padding-horizontal: 20px;

  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 15px;
`;

export const ScrollableContent = styled.ScrollView`
  padding-top: 20px;
  padding-bottom: 70px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;

  margin-vertical: 20px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding-bottom: 40px;
`;
