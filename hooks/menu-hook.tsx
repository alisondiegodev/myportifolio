import { create } from "zustand";

interface menuHookProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModalHook = create<menuHookProps>((set: any) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
