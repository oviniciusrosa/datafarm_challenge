import * as Icon from "react-native-feather";

import * as S from "./styles";
import theme from "~/theme";
import { useExecQueue } from "~/contexts/execution_queue";
import { TouchableOpacity } from "react-native-gesture-handler";

export function StatusBanner() {
  const { isOnline, runningQueue, hasErrorDuringSync, runQueue } =
    useExecQueue();

  if (hasErrorDuringSync) return <ErrorBanner onPress={runQueue} />;
  if (runningQueue) return <SyncingBanner />;
  if (!isOnline) return <NoInternetBanner />;

  return <></>;
}

function NoInternetBanner() {
  return (
    <S.Container>
      <Icon.AlertTriangle color={theme.colors.white} />
      <S.Message style={{ flex: 1 }}>
        Sem conexão! O app continua funcionando mas suas paradas serão
        registradas assim que recuperar conexão.
      </S.Message>
    </S.Container>
  );
}

function SyncingBanner() {
  return (
    <S.Container style={{ backgroundColor: theme.colors.info }}>
      <Icon.RefreshCw color={theme.colors.white} />
      <S.Message style={{ flex: 1 }}>Sincronizando dados...</S.Message>
    </S.Container>
  );
}

function ErrorBanner({ onPress }) {
  return (
    <S.Container
      style={{
        backgroundColor: theme.colors.danger,
        justifyContent: "space-between",
      }}>
      <S.ErrorContentContainer>
        <Icon.XCircle color={theme.colors.white} />
        <S.Message>Erro ao sincronizar os dados...</S.Message>
      </S.ErrorContentContainer>

      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <S.Message style={{ fontWeight: "400" }}>Tentar novamente</S.Message>
      </TouchableOpacity>
    </S.Container>
  );
}
