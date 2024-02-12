import { ReactNode } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const MenubarLayout = () => {
  return (
    <main className="container">
      <nav className="flex  justify-between items-center h-20">
        <div className="flex-1">
          <div>
            <header className="text-3xl">Portfolio</header>
          </div>
        </div>
        <div className="flex-1 flex justify-end space-x-4">
          <Button variant="link">Home</Button>
          <Button variant="link">Works</Button>
          <Button variant="link">Single Work</Button>
          <Button variant="link">Blog</Button>
          <ModeToggle />
        </div>
      </nav>
    </main>
  );
};
