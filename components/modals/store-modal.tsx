"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import YoutubeVideo from "../store-youtube";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Conheça um pouco mais sobre mim"
      description=""
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <YoutubeVideo />
      </div>
    </Modal>
  );
};
