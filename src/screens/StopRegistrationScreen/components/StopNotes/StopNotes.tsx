import { useState } from "react";

import * as Icon from "react-native-feather";
import * as S from "./styles";
import theme from "~/theme";

interface Props {
  onChange: (note: string) => void;
}

export function StopNotes({ onChange }: Props) {
  const [note, setNote] = useState<string>("");

  function handleChange(text: string) {
    setNote(text);
    onChange(text);
  }

  return (
    <S.Container>
      <S.Header>
        <Icon.Edit color={theme.colors.grey_60} />
        <S.Label>Nota da Parada</S.Label>
      </S.Header>

      <S.TextArea
        multiline={true}
        numberOfLines={4}
        onChangeText={handleChange}
        value={note}
        placeholder="Escrever nota..."
      />
    </S.Container>
  );
}
