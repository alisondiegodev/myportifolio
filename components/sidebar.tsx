"use client";
import { useModalHook } from "@/hooks/menu-hook";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Bike,
  BrainCircuit,
  Image as ImageIcon,
  Store,
  UserPlus,
} from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";
import { useState } from "react";

export default function Sidebar() {
  const modalHook = useModalHook();
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  return (
    <>
      <div
        className={`burger-menu btnMenu ${menuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
      </div>
      <aside
        style={{ right: menuVisible ? "0" : "-100vw" }}
        className={`menu ${
          menuVisible ? "visible" : ""
        } mx-4 flex flex-col items-end`}
      >
        <div className="p-2 flex  w-full justify-end items-start h-20 gap-6 ">
          <Button asChild size="sm">
            <Link target="blank" href="https://github.com/alisondiegodev">
              <Github className=" h-4 w-4 mr-2" />
              Github
            </Link>
          </Button>
          <Button asChild className="flex items-center" size="sm">
            <Link
              target="blank"
              href="https://www.linkedin.com/in/alison-diego-868970246/"
            >
              <Linkedin className="h-4 w-4 mr-2 mb-1" />
              LinkedIn
            </Link>
          </Button>
        </div>

        <nav className="navbar">
          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold "
            asChild
          >
            <Link className={pathname == "/" ? "active" : ""} href="/">
              Sobre mim
            </Link>
          </Button>

          <Separator />
          <h3 className="text-muted-foreground ">Projetos</h3>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
            <Link
              className={pathname == "/conversor" ? "active" : ""}
              href="/conversor"
            >
              <ImageIcon className="mr-2" /> Conversor de imagens
            </Link>
          </Button>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
            <Link
              className={pathname == "/ecommerce" ? "active" : ""}
              href="/ecommerce"
            >
              <Store className="mr-2" /> E-commerce Laravel
            </Link>
          </Button>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
            <Link
              className={pathname == "/interface" ? "active" : ""}
              href="/interface"
            >
              <UserPlus className="mr-2" />
              Cadastro Clínica
            </Link>
          </Button>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
            <Link className={pathname == "/ai" ? "active" : ""} href="/ai">
              <BrainCircuit className="mr-2" />
              Upload AI
            </Link>
          </Button>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
            <Link className={pathname == "/bike" ? "active" : ""} href="/bike">
              <Bike className="mr-2" />
              E-Commerce Bike
            </Link>
          </Button>

          <Button
            onClick={closeMenu}
            variant="outline"
            size="lg"
            className="font-bold"
            asChild
          >
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
