import { useState } from "react";

import * as Icon from "react-native-feather";
import * as S from "./styles";
import theme from "~/theme";

interface Props {
  onChange: (note: string) => void;
}

export function StopNotes({ onChange }: Props) {
  const [note, setNote] = useState<string>("");

  return (
    <S.Container>
      <S.Header>
        <Icon.Edit color={theme.colors.grey_60} />
        <S.Label>Nota da Parada</S.Label>
      </S.Header>

      <S.TextArea
        multiline={true}
        numberOfLines={4}
        onChangeText={setNote}
        value={note}
        onEndEditing={() => onChange(note)}
        placeholder="Escrever nota..."
      />
    </S.Container>
  );
}
