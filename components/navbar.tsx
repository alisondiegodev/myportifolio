"use client";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-16 w-full flex justify-end items-center mt-4  ">
        <div className="p-2 flex gap-6 ">
          <Button asChild size="sm">
            <Link target="blank" href="https://github.com/alisondiegodev">
              <Github className=" h-4 w-4 mr-2" />
              Github
            </Link>
          </Button>
          <Button asChild className="flex items-center" size="sm">
            <Link
              target="blank"
              href="https://www.linkedin.com/in/alison-diego-da-silva-868970246/"
            >
              <Linkedin className="h-4 w-4 mr-2 mb-1" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
