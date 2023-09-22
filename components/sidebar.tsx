"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Image as ImageIcon, Server, Store } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside>
        <nav className="navbar">
          <Button variant="outline" size="lg" className="font-bold " asChild>
            <Link className={pathname == "/" ? "active" : ""} href="/">
              Sobre mim
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link
              className={pathname == "/conversor" ? "active" : ""}
              href="/conversor"
            >
              <ImageIcon className="mr-2" /> Conversor de imagens
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link
              className={pathname == "/ecommerce" ? "active" : ""}
              href="/ecommerce"
            >
              <Store className="mr-2" /> E-commerce Laravel
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link
              className={pathname == "/multibackend" ? "active" : ""}
              href="/multibackend"
            >
              <Server className="mr-2" />
              E-Commerce Backend
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link
              className={pathname == "/ecommercenext" ? "active" : ""}
              href="/ecommercenext"
            >
              <Store className="mr-2" /> E-Commerce NextJS
            </Link>
          </Button>
        </nav>
      </aside>
    </>
  );
}
