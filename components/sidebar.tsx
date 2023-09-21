import Link from "next/link";
import { Button } from "./ui/button";
import { Image as ImageIcon, Store } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <aside>
        <nav className="navbar">
          <Button variant="outline" size="lg" className="font-bold " asChild>
            <Link className="active" href="/">
              Sobre mim
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link className="active" href="/conversor">
              <ImageIcon className="mr-2" /> Conversor de imagens
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link href="/ecommerce">
              <Store className="mr-2" /> E-commerce Laravel
            </Link>
          </Button>
        </nav>
      </aside>
    </>
  );
}
