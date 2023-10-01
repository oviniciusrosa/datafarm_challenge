import { Button, Empty, OutlineButton, SearchInput } from "~/components";
import { StopList } from "./components";
import * as S from "./styles";
import { useMemo, useState } from "react";
import { useResources } from "~/contexts/resources";
import { IStopFilled } from "~/models/IStops";
import { EntranceFadeIn } from "~/constants/EntranceFadeIn";

export function StopRegisterListScreen() {
  const [search, setSearch] = useState("");
  const { stops } = useResources();

  const filteredList: IStopFilled[] = useMemo(() => {
    return stops.filter(item => {
      if (search === "") return item;

      if (item.farm.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return item;
      }
    });
  }, [search, stops]);

  return (
    <S.Container entering={EntranceFadeIn}>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder="Localizar registros..."
        style={{ marginTop: 30, marginBottom: 20 }}
      />

      {stops.length === 0 ? <Empty /> : <StopList list={filteredList} />}
    </S.Container>
  );
}
