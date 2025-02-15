"use client";
import { useRouter } from "next/navigation";
import { MenuBarDropdown } from "./menu-bar-dropdown";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const MenubarLayout = () => {
  const router = useRouter();
  return (
    <main className="container">
      <nav className="flex  justify-between items-center h-20">
        <div className="flex-1">
          <div>
            <header
              className="text-3xl "
              onClick={() => {
                router.push("/");
              }}
            >
              <span
                className="text-3xl hover:bg-muted/60 cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                Portfolio
              </span>
            </header>
          </div>
        </div>
        <div className="flex-1  hidden lg:flex justify-end space-x-4">
          <Button
            variant="link"
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </Button>
          <Button
            variant="link"
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
          </Button>
          <Button
            variant="link"
            onClick={() => {
              router.push("/bio");
            }}
          >
            Bio
          </Button>

          <ModeToggle />
        </div>
        <MenuBarDropdown />
      </nav>
    </main>
  );
};
