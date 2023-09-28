import { FlatList, View, Text } from "react-native";
import { StopItem } from "../StopItem";
import { Divider } from "~/components";

import { IStopFilled } from "~/models/IStops";

interface Props {
  list: IStopFilled[];
}

export function StopList({ list }: Props) {
  return (
    <FlatList
      keyboardDismissMode={"none"}
      showsVerticalScrollIndicator={false}
      data={list}
      renderItem={({ item }) => <StopItem key={item.uuid} item={item} />}
      keyExtractor={item => item.uuid}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={() => (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text>Nenhum registro encontrado...</Text>
        </View>
      )}
    />
  );
}
