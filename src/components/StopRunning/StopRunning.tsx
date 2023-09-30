import { useEffect, useState } from "react";

import { useResources } from "~/contexts/resources";
import { usePositionAnimatedStyle } from "./hooks/usePositionAnimatedStyle";

import * as S from "./styles";

export function StopRunning() {
  const { activeStop, finishStop } = useResources();

  const [animatedStyle, { initAnimation, resetAnimation }] =
    usePositionAnimatedStyle();

  useEffect(() => {
    if (!!activeStop) {
      initAnimation();
    } else {
      resetAnimation();
    }
  }, [activeStop]);

  return (
    <S.Container style={animatedStyle}>
      <S.Label>Parada em andamento...</S.Label>
      {!!activeStop && (
        <TimeCount minute={activeStop.minutes} onTimerHitZero={finishStop} />
      )}
    </S.Container>
  );
}

interface TimeCountProps {
  minute: number;
  onTimerHitZero: VoidCallback;
}

function TimeCount({ minute, onTimerHitZero }: TimeCountProps) {
  const [time, setTime] = useState<number>(minute * 60);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else {
      onTimerHitZero();
    }
  }, [time]);

  return (
    <S.TimeText>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </S.TimeText>
  );
}
