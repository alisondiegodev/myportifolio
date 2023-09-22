import Image from "next/image";
import Icones from "@/components/icones";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className=" lg:flex-row flex-col w-full flex items-start">
          <div className="lg:w-80 w-40 ">
            <Image
              className="ml-4 rounded-lg"
              src="/perfil.png"
              width={300}
              height={300}
              alt="fotoperfil"
              priority
            />
          </div>
          <div className="flex-1 p-4 -mt-2 space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Alison Diego</h1>
              <p className="text-muted-foreground italic text-sm mt-1">
                Desenvolvedor Fullstack NextJS e Laravel
              </p>
            </div>
            <h1 className="text-2xl sobre ">Sobre mim:</h1>
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
          <Icones />
        </div>
      </div>
    </>
  );
}
