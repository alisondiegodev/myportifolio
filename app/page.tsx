import Content from "@/components/youtube-modal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex-1 w-full bg-slate-800">
        <div>
          <Image src="/perfil.png" width={300} height={300} alt="fotoperfil" />
        </div>
        <div>
          <h1>About me:</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur animi consectetur pariatur ea asperiores voluptate
            aperiam nesciunt tempore modi exercitationem explicabo, dolore fugit
            soluta illo, eligendi officiis? Blanditiis, labore consectetur.
          </p>
        </div>
      </div>
    </>
  );
}
