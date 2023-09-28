import { ReactNode, createContext, useContext, useState } from "react";
import { IStop, IStopFilled } from "~/models/IStops";

interface ResourcesContextProps {
  addStop(stop: IStop): Promise<void>;
  stops: IStopFilled[];
}

const ResourcesContext = createContext<ResourcesContextProps>(
  {} as ResourcesContextProps
);

type Props = { children: ReactNode };

export default function ResourcesProvider({ children }: Props) {
  const [stops, setStops] = useState<IStopFilled[]>([
    {
      uuid: "ghdusiahuidsa",
      minutes: 10,
      longitude: 0,
      latitude: 0,
      machinery: {
        id: 5358,
        name: "TR 094 - 7815",
        serialNumber: "BM7815X080375",
        growerId: 10944,
      },
      farm: {
        id: 17134,
        name: "Santa Cristina",
        growerName: "Carlos Alberto",
      },
      field: {
        id: 108927,
        name: "SC 04",
        idFarm: 17134,
      },
      reason: {
        id: 1,
        name: "Abastecimento de combustível",
        icon: "M192 160c0-17.673 14.327-32 32-32v0h320c17.673 0 32 14.327 32 32v0 320c0 17.673-14.327 32-32 32v0h-320c-17.673 0-32-14.327-32-32v0-320z M64 128c0-70.692 57.308-128 128-128v0h384c70.692 0 128 57.308 128 128v0 512c70.692 0 128 57.308 128 128v0 32c0 17.673 14.327 32 32 32s32-14.327 32-32v0-288h-32c-17.673 0-32-14.327-32-32v0-200c0-17.673 14.327-32 32-32v0h95.68c-0.704-30.464-3.392-57.216-12.864-78.208-5.232-12.379-13.961-22.429-24.945-29.158l-0.271-0.154c-11.776-7.040-29.696-12.48-57.6-12.48-17.673 0-32-14.327-32-32s14.327-32 32-32v0c36.096 0 66.176 7.040 90.368 21.504 24.512 14.592 40.576 35.264 50.816 58.048 18.88 41.92 18.816 93.76 18.816 133.184v203.2c0 0.019 0 0.041 0 0.064 0 17.673-14.327 32-32 32-0 0-0-0-0-0l-32-0v288c0 53.019-42.981 96-96 96s-96-42.981-96-96v0-32c0-35.346-28.654-64-64-64v0 256h32c17.673 0 32 14.327 32 32s-14.327 32-32 32v0h-704c-17.673 0-32-14.327-32-32s14.327-32 32-32v0h32v-832zM640 128c0-35.346-28.654-64-64-64v0h-384c-35.346 0-64 28.654-64 64v0 832h512v-832z",
      },
    },
    {
      uuid: "ddsadsadsadsa",
      minutes: 10,
      longitude: 0,
      latitude: 0,
      machinery: {
        id: 5358,
        name: "TR 094 - 7815",
        serialNumber: "BM7815X080375",
        growerId: 10944,
      },
      farm: {
        id: 17134,
        name: "Fazenda Passo Fundo",
        growerName: "João Antonio",
      },
      field: {
        id: 108927,
        name: "SC 04",
        idFarm: 17134,
      },
      reason: {
        id: 1,
        name: "Café da tarde",
        icon: "M192 160c0-17.673 14.327-32 32-32v0h320c17.673 0 32 14.327 32 32v0 320c0 17.673-14.327 32-32 32v0h-320c-17.673 0-32-14.327-32-32v0-320z M64 128c0-70.692 57.308-128 128-128v0h384c70.692 0 128 57.308 128 128v0 512c70.692 0 128 57.308 128 128v0 32c0 17.673 14.327 32 32 32s32-14.327 32-32v0-288h-32c-17.673 0-32-14.327-32-32v0-200c0-17.673 14.327-32 32-32v0h95.68c-0.704-30.464-3.392-57.216-12.864-78.208-5.232-12.379-13.961-22.429-24.945-29.158l-0.271-0.154c-11.776-7.040-29.696-12.48-57.6-12.48-17.673 0-32-14.327-32-32s14.327-32 32-32v0c36.096 0 66.176 7.040 90.368 21.504 24.512 14.592 40.576 35.264 50.816 58.048 18.88 41.92 18.816 93.76 18.816 133.184v203.2c0 0.019 0 0.041 0 0.064 0 17.673-14.327 32-32 32-0 0-0-0-0-0l-32-0v288c0 53.019-42.981 96-96 96s-96-42.981-96-96v0-32c0-35.346-28.654-64-64-64v0 256h32c17.673 0 32 14.327 32 32s-14.327 32-32 32v0h-704c-17.673 0-32-14.327-32-32s14.327-32 32-32v0h32v-832zM640 128c0-35.346-28.654-64-64-64v0h-384c-35.346 0-64 28.654-64 64v0 832h512v-832z",
      },
    },
  ]);

  async function addStop(stop: IStop) {
    console.error("Missing Implementation");
  }

  return (
    <ResourcesContext.Provider value={{ addStop, stops }}>
      {children}
    </ResourcesContext.Provider>
  );
}

export function useResources(): ResourcesContextProps {
  const contextProps = useContext(ResourcesContext);

  return contextProps;
}
