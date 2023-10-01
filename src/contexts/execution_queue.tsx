import { useNetInfo } from "@react-native-community/netinfo";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dataSource } from "~/database/connection";
import { useQueueData } from "~/hooks/data/useQueueData";
import { useApi } from "~/hooks/services/useApi";
import { IQueue } from "~/models/IQueue";

interface ExecQueueContextProps {
  addToQueue: (content: IQueue) => Promise<void>;
  runQueue: () => Promise<void>;
  hasErrorDuringSync: boolean;
  runningQueue: boolean;
  isOnline: boolean;
}

const ExecQueueContext = createContext<ExecQueueContextProps>(
  {} as ExecQueueContextProps
);

type Props = { children: ReactNode };

export default function ExecQueueProvider({ children }: Props) {
  const [api, { loading }] = useApi();
  const netInfo = useNetInfo();
  const storedQueue = useQueueData();

  const isOnline = netInfo.isConnected && netInfo.isInternetReachable;

  const [hasErrorDuringSync, setHasErrorDuringSync] = useState(false);

  async function addToQueue(content: IQueue) {
    if (isOnline) {
      await execQueue(content);
    } else {
      await storedQueue.add(content);
    }
  }

  async function execQueue(content: IQueue) {
    try {
      console.log(content);
      await api[content.httpMethod]({
        endpoint: content.endpoint,
        data: JSON.parse(content.data),
      });
      if (!!content.id) await storedQueue.remove(content);
    } catch (error) {
      console.error(error);
      setHasErrorDuringSync(true);
    }
  }

  async function runQueue() {
    const queue: IQueue[] = await storedQueue.getAll();

    if (queue.length > 0) {
      await Promise.all(queue.map(content => execQueue(content)));
    }
  }

  useEffect(() => {
    if (isOnline && dataSource.isInitialized) {
      runQueue();
    }
  }, [isOnline, dataSource.isInitialized]);

  return (
    <ExecQueueContext.Provider
      value={{
        addToQueue,
        runQueue,
        runningQueue: loading,
        hasErrorDuringSync,
        isOnline,
      }}>
      {children}
    </ExecQueueContext.Provider>
  );
}

export function useExecQueue(): ExecQueueContextProps {
  const contextProps = useContext(ExecQueueContext);

  return contextProps;
}
