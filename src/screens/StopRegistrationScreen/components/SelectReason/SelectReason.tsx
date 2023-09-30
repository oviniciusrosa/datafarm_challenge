import { useResources } from "~/contexts/resources";
import * as S from "./styles";
import { Icon } from "~/components";
import { useState } from "react";
import { IReasons } from "~/models/IReasons";
import { TouchableOpacity } from "react-native";
import theme from "~/theme";

interface Props {
  onChange: (idReason: number | null) => void;
}

export function SelectReason({ onChange }: Props) {
  const { resources } = useResources();
  const [selected, setSelected] = useState<IReasons | null>(null);

  function handleSelect(reason: IReasons) {
    const shouldRemove: boolean = reason.id === selected?.id;

    const value: IReasons | null = shouldRemove ? null : reason;

    setSelected(value);
    onChange(value?.id);
  }

  return (
    <S.Container>
      <S.Label>Motivo da Parada</S.Label>

      <S.ListContainer>
        {resources.reasons.map(reason => (
          <TouchableOpacity
            key={reason.id}
            activeOpacity={0.7}
            onPress={() => handleSelect(reason)}>
            <S.ReasonItem
              key={reason.id}
              $isSelected={selected?.id === reason.id}>
              <Icon
                path={reason.icon}
                color={theme.colors.grey_60}
                width={25}
                height={25}
              />
              <S.ReasonTitle>{reason.name}</S.ReasonTitle>
            </S.ReasonItem>
          </TouchableOpacity>
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
