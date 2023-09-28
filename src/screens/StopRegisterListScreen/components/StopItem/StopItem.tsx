import { Icon } from "~/components";
import { IStopFilled } from "~/models/IStops";
import * as S from "./styles";
import { View } from "react-native";

interface Props {
  item: IStopFilled;
}

export function StopItem({ item }: Props) {
  return (
    <S.Container>
      <Icon path={item.reason.icon} />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <S.HeadingContainer>
          <S.FarmName>{item.farm.name}</S.FarmName>
          <S.CreatedAt>21/10/1999 09:45</S.CreatedAt>
        </S.HeadingContainer>
        <S.ReasonText>{item.reason.name}</S.ReasonText>
      </View>
    </S.Container>
  );
}
