import Image from "next/image";

export default function Conversor() {
  return (
    <>
      <div className="flex justify-between h-full">
        <div className="w-[900px] h-[400px] bg-white overflow-hidden rounded-2xl m-4 ">
          <Image
            alt="projeto"
            quality={100}
            src="/conversor.png"
            width={900}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
