import { TouchableOpacity } from "react-native";
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
import { validateStopRegistration } from "./validation";
import { Modal } from "~/components/Modal";
import GetLocation from "react-native-get-location";

const { Heading } = Typography;

type SelectFieldName =
  | "idFarm"
  | "idField"
  | "idMachinery"
  | "idReason"
  | "note"
  | "minutes"
  | "longitude"
  | "latitude";

export function StopRegistrationScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stop, setStop] = useState<IStop | null>();

  const navigation = useNavigation();
  const { resources, addStop, activeStop } = useResources();

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

    return farm.fields?.map(item => ({ value: item.id, label: item.name }));
  }, [resources.farms, stop?.idFarm]);

  function handleUpdate(name: SelectFieldName) {
    return function (value: string | number) {
      setStop(current => ({
        ...current,
        [name]: value,
      }));
    };
  }

  function handleSelect(name: SelectFieldName) {
    return function (option: IOption) {
      handleUpdate(name)(option.value);
    };
  }

  async function handleFinish() {
    try {
      setLoading(true);

      if (!!activeStop) {
        return setErrorMessage(
          "Não é possível registrar nova parada, pois há uma em andamento..."
        );
      }

      const error = validateStopRegistration(stop);
      if (!!error) return setErrorMessage(error);

      const { latitude, longitude } = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });

      await addStop({
        ...stop,
        latitude,
        longitude,
        minutes: stop?.minutes ?? 5,
      });

      setTimeout(() => {
        navigation.goBack();
      }, 500);
    } catch (error) {
      console.error(error);
      setErrorMessage("Não foi possível concluir o registro da parada...");
    } finally {
      setLoading(false);
    }
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
          onChange={handleSelect("idMachinery")}
          options={machineries}
          style={{ marginTop: 8 }}
        />

        <S.Row>
          <Select
            label="Fazenda"
            onChange={handleSelect("idFarm")}
            options={farms}
            style={{ flex: 5 }}
          />
          <Select
            key={stop?.idFarm}
            label="Talhão"
            onChange={handleSelect("idField")}
            options={fields}
            style={{ flex: 2 }}
          />
        </S.Row>

        <SelectReason onChange={handleUpdate("idReason")} />

        <StopNotes onChange={handleUpdate("note")} />

        <S.ActionsContainer>
          <TimeSetter onChange={handleUpdate("minutes")} />
          <Button onPress={handleFinish} style={{ flex: 1 }}>
            Salvar
          </Button>
        </S.ActionsContainer>
      </S.ScrollableContent>

      <Modal.Error
        open={!!errorMessage}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
      />

      <Modal.Loading open={loading} />
    </S.Container>
  );
}
