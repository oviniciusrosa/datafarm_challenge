import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import ResourcesProvider from "~/contexts/resources";
import AuthProvider from "~/contexts/authentication";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StopRunning } from "~/components";
import ExecQueueProvider from "~/contexts/execution_queue";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ExecQueueProvider>
        <ResourcesProvider>
          <AuthProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <StopRunning />
                <Routes />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </AuthProvider>
        </ResourcesProvider>
      </ExecQueueProvider>
    </ThemeProvider>
  );
}

export default App;
