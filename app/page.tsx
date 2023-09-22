"use client";
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const storeModal = useStoreModal();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="w-full flex items-start">
          <div className="w-80 ">
            <Image
              className="ml-4 rounded-lg"
              src="/perfil.png"
              width={300}
              height={300}
              alt="fotoperfil"
            />
          </div>
          <div className="flex-1 p-4 space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Alison Diego</h1>
              <p className="text-muted-foreground italic text-sm">
                Desenvolvedor Fullstack NextJS e Laravel
              </p>
            </div>
            <h1 className="text-2xl">Sobre mim:</h1>
            <p className="leading-relaxed">
              Tenho 28 anos e sou apaixonado por o que faço, já trabalhei na
              criação de centenas de páginas web, no tempo livre gosto de criar
              aplicações e elevar meu nível profissional.
            </p>
            <p className="leading-relaxed">
              Tenho facilidade em transitar entre linguagens e aprendizado
              acelerado, o que me levou a ter conhecimento em diversas
              ferramentas e tecnologias.
            </p>
          </div>
        </div>
        <div className="ml-4">
          <Button
            onClick={() => {
              setOpen(false);
              storeModal.onOpen();
            }}
            className="font-semibold text-zinc-700"
            size="sm"
          >
            <Play className="mr-2 h-4 w-4 " />
            Assistir Apresentação
          </Button>
        </div>
      </div>
    </>
  );
}
