import { ReactNode, createContext, useContext, useState } from "react";
import { useResourcesData } from "~/hooks/data/useResourcesData";
import { useStopData } from "~/hooks/data/useStopData";
import { IResources } from "~/models/IResources";
import { IStop, IStopFilled } from "~/models/IStops";
import { StopFormatter } from "~/utils/formatters/StopFormatter";
import { useExecQueue } from "./execution_queue";

interface ResourcesContextProps {
  addStop(stop: IStop): Promise<void>;
  finishStop(): Promise<void>;
  activeStop: IStopFilled | null;
  stops: IStopFilled[];
  resources: IResources | null;
  fillResources(): Promise<void>;
  insertResources: (resources: IResources) => Promise<void>;
}

const ResourcesContext = createContext<ResourcesContextProps>(
  {} as ResourcesContextProps
);

type Props = { children: ReactNode };

export default function ResourcesProvider({ children }: Props) {
  const { addToQueue } = useExecQueue();
  const stopData = useStopData();
  const { insertResources, getResources } = useResourcesData();

  const [resources, setResources] = useState<IResources | null>(null);

  const [activeStop, setActiveStop] = useState<IStopFilled | null>();
  const [stops, setStops] = useState<IStopFilled[]>([]);

  async function addStop(stop: IStop) {
    const inserted = await stopData.save(stop);

    await addToQueue({
      data: JSON.stringify(inserted),
      endpoint: "/mobile/machine/stop-register/registry",
      httpMethod: "post",
    });
    const filledStop = StopFormatter.fill(inserted, resources);

    setActiveStop(filledStop);
  }

  async function finishStop() {
    setStops(prev => [...prev, activeStop]);
    setActiveStop(null);
  }

  async function fillResources() {
    const found: IResources = await getResources();

    setResources(found);
    await fillStops(found);
  }

  async function fillStops(updatedResource: IResources) {
    const stopList: IStop[] = await stopData.getAll();
    const filledStopList: IStopFilled[] = stopList.map(stop =>
      StopFormatter.fill(stop, updatedResource)
    );

    setStops(filledStopList);
  }

  return (
    <ResourcesContext.Provider
      value={{
        addStop,
        stops,
        activeStop,
        resources,
        finishStop,
        fillResources,
        insertResources,
      }}>
      {children}
    </ResourcesContext.Provider>
  );
}

export function useResources(): ResourcesContextProps {
  const contextProps = useContext(ResourcesContext);

  return contextProps;
}
