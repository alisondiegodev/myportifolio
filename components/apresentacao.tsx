"use client";
import { useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

export default function Apresentacao() {
  const storeModal = useStoreModal();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false);
          storeModal.onOpen();
        }}
        className={`${
          pathname == "/" ? "isHome" : "notHome"
        } font-semibold text-zinc-700 whitespace-nowrap playButton `}
        size="sm"
      >
        <Play className="mr-2 h-4 w-4 " />
        Assistir Apresentação
      </Button>
    </>
  );
}
