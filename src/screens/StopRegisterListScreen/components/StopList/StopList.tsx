import { FlatList, Text } from "react-native";
import { useResources } from "~/contexts/resources";
import { StopItem } from "../StopItem";

import { Divider, SearchInput } from "~/components";
import { useEffect, useMemo, useState } from "react";

export function StopList() {
  const [search, setSearch] = useState("");
  const { stops } = useResources();

  const filteredList = useMemo(() => {
    return stops.filter(item => {
      if (search === "") return item;

      if (item.farm.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return item;
      }
    });
  }, [search]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={filteredList}
      extraData={filteredList}
      renderItem={({ item }) => <StopItem key={item.uuid} item={item} />}
      keyExtractor={item => item.uuid}
      ItemSeparatorComponent={Divider}
      style={{ paddingVertical: 25 }}
      contentContainerStyle={{ paddingBottom: 50 }}
      ListHeaderComponent={() => (
        <SearchComponent onChange={setSearch} defaultValue={search} />
      )}
    />
  );
}

function SearchComponent({ onChange, defaultValue }) {
  const [search, setSearch] = useState(defaultValue);

  return (
    <SearchInput
      value={search}
      onChangeText={setSearch}
      placeholder="Localizar registros..."
      style={{ marginBottom: 30 }}
      onEndEditing={() => onChange(search)}
    />
  );
}
