import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getAllCategories } from "@/lib/actions/product.actions";
import { APP_NAME } from "@/lib/constants";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = async () => {
  const categories = await getAllCategories();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start gap-3">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Select a category</DrawerTitle>
                <div className="space-y-1">
                  {categories.map((category: { name: string }) => (
                    <Button
                      className="w-full justify-start"
                      variant="ghost"
                      key={category.name}
                      asChild
                    >
                      <DrawerClose asChild>
                        <Link href={`/search?category=${category.name}`}>
                          {category.name}
                        </Link>
                      </DrawerClose>
                    </Button>
                  ))}
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/holberton_logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
              className="rounded-md"
            />
            {APP_NAME}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
