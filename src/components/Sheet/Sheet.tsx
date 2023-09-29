import BottomSheet from "@gorhom/bottom-sheet";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  open: boolean;
  onClose: VoidCallback;
}

export function Sheet({ open, onClose, children }: Props) {
  if (!open) return <></>;

  return (
    <BottomSheet
      index={0}
      snapPoints={["98%"]}
      enablePanDownToClose
      onClose={onClose}>
      {children}
    </BottomSheet>
  );
}
