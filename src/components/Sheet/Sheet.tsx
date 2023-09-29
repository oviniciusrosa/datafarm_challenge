import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ReactElement, useCallback, useEffect, useRef } from "react";

import * as S from "./styles";
import { View } from "react-native";

interface Props {
  children: ReactElement | ReactElement[];
  open: boolean;
  onClose: VoidCallback;
}

export function Sheet({ open, onClose, children }: Props) {
  const sheetRef = useRef<BottomSheetModal>(null);

  const handleClose = useCallback(() => {
    sheetRef.current.close();
    setTimeout(onClose, 400);
  }, []);

  useEffect(() => {
    if (open) sheetRef.current.present();
    else handleClose();
  }, [open]);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={["50%", "95%"]}
      backdropComponent={() => (
        <S.OverlayWrapper onPress={handleClose}>
          <S.Overlay />
        </S.OverlayWrapper>
      )}>
      <View style={{ zIndex: 10, flex: 1 }}>{children}</View>
    </BottomSheetModal>
  );
}
