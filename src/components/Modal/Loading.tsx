import { ModalWrapper } from "./ModalWrapper";

import LoadingAnimation from "~/assets/lottie/loading.json";

import LottieView from "lottie-react-native";

interface Props {
  open: boolean;
}

export function Loading({ open }: Props) {
  return (
    <ModalWrapper open={open} onClose={() => {}}>
      {open && (
        <LottieView
          autoPlay
          loop
          source={LoadingAnimation}
          style={{
            width: 250,
            height: 250,
            alignSelf: "center",
          }}
        />
      )}
    </ModalWrapper>
  );
}
