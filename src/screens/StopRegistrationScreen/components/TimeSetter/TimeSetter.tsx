import * as Icon from "react-native-feather";

import * as S from "./styles";
import theme from "~/theme";
import { useEffect, useMemo, useState } from "react";

interface Props {
  onChange: (minutes: number) => void;
}

export function TimeSetter({ onChange }: Props) {
  const [minutes, setMinutes] = useState<number>(5);

  const time = useMemo(() => {
    if (minutes < 60) {
      const minutesText: string = minutes.toString().padStart(2, "0");
      return `${minutesText} min`;
    }

    const hours: number = Math.floor(minutes / 60);
    const restMinutes = minutes - hours * 60;

    const hourText: string = hours.toString().padStart(2, "0");
    const minutesText: string = restMinutes.toString().padStart(2, "0");

    return `${hourText}:${minutesText} h`;
  }, [minutes]);

  function increaseTime() {
    setMinutes(prev => prev + 5);
  }

  function decreaseTime() {
    if (minutes > 5) {
      setMinutes(prev => prev - 5);
    }
  }

  useEffect(() => {
    onChange(minutes);
  }, [minutes]);

  return (
    <S.Container>
      <S.ActionButton onPress={increaseTime}>
        <Icon.PlusCircle color={theme.colors.secondary_500} />
      </S.ActionButton>

      <S.ContentWrapper>
        <S.Content>{time}</S.Content>
      </S.ContentWrapper>

      <S.ActionButton onPress={decreaseTime}>
        <Icon.MinusCircle color={theme.colors.secondary_500} />
      </S.ActionButton>
    </S.Container>
  );
}
