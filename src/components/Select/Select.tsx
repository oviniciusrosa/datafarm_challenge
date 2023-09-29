import { IOption, Props } from "./@types";
import { Sheet } from "../Sheet";
import { useEffect, useState } from "react";
import { SelectItem } from "./SelectItem";

import { useLabelAnimatedStyle } from "./hooks/useLabelAnimatedStyle";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import * as Icon from "react-native-feather";

import theme from "~/theme";
import * as S from "./styles";

export function Select({
  label,
  defaultValue,
  options,
  onChange,
  style,
}: Props) {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [value, setValue] = useState<IOption | null>(defaultValue);

  function closeOptions() {
    setOpenOptions(false);
  }

  function selectOption(option: IOption) {
    return () => {
      setValue(option);
      onChange(option);
      closeOptions();
    };
  }

  return (
    <>
      <SelectInput
        label={label}
        value={value}
        style={style}
        openOptions={() => setOpenOptions(true)}
      />

      <Sheet open={openOptions} onClose={closeOptions}>
        <S.OptionsTitle>Selecionar {label}</S.OptionsTitle>

        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          data={options}
          style={{ padding: 20, paddingTop: 0 }}
          renderItem={({ item }) => (
            <SelectItem
              key={item.value}
              item={item}
              onSelect={selectOption(item)}
            />
          )}
        />
      </Sheet>
    </>
  );
}

export function SelectInput({ label, style, value, openOptions }) {
  const [labelStyle, { initAnimation, resetAnimation }] =
    useLabelAnimatedStyle();

  useEffect(() => {
    if (value) {
      initAnimation();
    } else {
      resetAnimation();
    }
  }, [value]);

  return (
    <S.InputWrapper style={style} onPress={openOptions}>
      <S.Label
        style={[labelStyle, { fontWeight: !!value ? "bold" : "normal" }]}>
        {label}
      </S.Label>
      <S.InputContent>
        <S.InputContainer>
          <S.SelectedLabel>{value?.label}</S.SelectedLabel>
          {value?.extra && <S.SelectedExtra>{value?.extra}</S.SelectedExtra>}
        </S.InputContainer>
        <Icon.ChevronDown color={theme.colors.grey_60} />
      </S.InputContent>
    </S.InputWrapper>
  );
}
