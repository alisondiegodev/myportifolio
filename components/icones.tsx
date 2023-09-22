import Image from "next/image";

export default function Icones() {
  const icons = [
    "react",
    "js",
    "ts",
    "node",
    "mysql",
    "php",
    "laravel",
    "html",
    "css",
  ];
  return (
    <div className="icons w-full  flex items-center gap-2  px-2 rounded-lg absolute bottom-10">
      <Image
        width={80}
        height={80}
        style={{ width: 70, height: "auto", filter: "invert(1)" }}
        alt="tech"
        src="/icons/next.webp"
      />
      {icons.map((item, index) => {
        return (
          <Image
            alt="tech"
            key={index}
            width={40}
            height={40}
            quality={50}
            style={{ width: 40, height: 40 }}
            src={"./icons/" + item + ".svg"}
          />
        );
      })}
      <Image
        width={80}
        height={80}
        style={{ width: 90, height: "auto" }}
        alt="tech"
        src="/icons/tailwindcss.webp"
      />

      <Image
        width={80}
        height={80}
        style={{ width: 90, height: "auto", filter: "brightness(3)" }}
        alt="tech"
        src="/icons/prisma.webp"
      />
    </div>
  );
}
