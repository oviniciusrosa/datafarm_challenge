import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Button, Typography } from "~/components";

import { Select } from "~/components";
import { useResources } from "~/contexts/resources";

import * as Icon from "react-native-feather";

import * as S from "./styles";
import theme from "~/theme";
import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { IOption } from "~/components/Select/@types";
import { IStop } from "~/models/IStops";
import { SelectReason, StopNotes, TimeSetter } from "./components";
import { IResourceFarm } from "~/models/IResources";

const { Heading } = Typography;

type SelectFieldName = "idFarm" | "idField" | "idMachinery" | "idReason";

export function StopRegistrationScreen() {
  const [stop, setStop] = useState<IStop | null>();

  const navigation = useNavigation();
  const { resources, addStop } = useResources();

  const goBack = () => navigation.goBack();

  const machineries = useMemo<IOption[]>(
    () =>
      resources.machineries.map(item => ({
        value: item.id,
        label: item.name,
        extra: item.serialNumber,
      })),
    [resources.machineries]
  );

  const farms = useMemo<IOption[]>(
    () => resources.farms.map(item => ({ value: item.id, label: item.name })),
    [resources.farms]
  );

  const fields = useMemo<IOption[]>(() => {
    if (!stop?.idFarm) return [];

    const farm: IResourceFarm = resources.farms.find(
      item => item.id === stop.idFarm
    );

    return farm.fields.map(item => ({ value: item.id, label: item.name }));
  }, [resources.farms, stop?.idFarm]);

  function handleUpdate(name: SelectFieldName) {
    return function (option: IOption) {
      setStop(current => ({
        ...current,
        [name]: option.value,
      }));
    };
  }

  function handleChangeReason(id: number | null) {
    setStop(current => ({
      ...current,
      idReason: id,
    }));
  }

  function handleChangeNote(note: string) {
    setStop(current => ({
      ...current,
      note,
    }));
  }

  function handleMinute(minutes: number) {
    setStop(current => ({
      ...current,
      minutes,
    }));
  }

  function handleFinish() {
    addStop(stop);
    setStop(null);
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
          <Icon.ArrowLeft color={theme.colors.primary_500} />
        </TouchableOpacity>
        <Heading>Registro de Parada</Heading>
      </S.Header>

      <S.ScrollableContent showsVerticalScrollIndicator={false}>
        <Select
          label="Equipamento"
          onChange={handleUpdate("idMachinery")}
          options={machineries}
          style={{ marginTop: 8 }}
        />

        <S.Row>
          <Select
            label="Fazenda"
            onChange={handleUpdate("idFarm")}
            options={farms}
            style={{ flex: 5 }}
          />
          <Select
            key={stop?.idFarm}
            label="Talhão"
            onChange={handleUpdate("idField")}
            options={fields}
            style={{ flex: 2 }}
          />
        </S.Row>

        <SelectReason onChange={handleChangeReason} />

        <StopNotes onChange={handleChangeNote} />

        <S.ActionsContainer>
          <TimeSetter onChange={handleMinute} />
          <Button onPress={handleFinish} style={{ flex: 1 }}>
            Salvar
          </Button>
        </S.ActionsContainer>
      </S.ScrollableContent>
    </S.Container>
  );
}
