import { IOption } from "./@types";

import * as S from "./styles";

interface Props {
  item: IOption;
  onSelect: (selectedOption: IOption) => void;
}

export function SelectItem({ item, onSelect }: Props) {
  return (
    <S.ItemTouchable onPress={() => onSelect(item)}>
      <S.ItemLabel>{item.label}</S.ItemLabel>
      {item.extra && <S.ItemExtra>{item.extra}</S.ItemExtra>}
    </S.ItemTouchable>
  );
}
