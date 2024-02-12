import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import profilePhoto from "@/public/profile-photo.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="mt-20  ">
      <section className="flex space-x-16 mb-28 container h-[75dvh]">
        <div className="space-y-5">
          <h1 className="text-4xl">
            Hello, I&apos;m Pedro,
            <br /> Front-end Developer
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            nesciunt laboriosam itaque officiis deleniti nulla labore. Repellat,
            cum accusamus excepturi impedit unde, corrupti asperiores quam
            magnam similique quisquam id ratione.
          </p>
          <div className="flex flex-col space-y-5">
            <Button className="w-56">Download resume EN-US</Button>
            <Button className="w-56">Download resume PT-BR</Button>
          </div>
        </div>

        <div>
          <Image
            src={profilePhoto}
            alt="profile photo"
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>
      </section>
      <section className="flex flex-col bg-muted h-full pb-24 w-[100vw] space-y-8">
        <div className="flex flex-row   justify-between items-center container">
          <Label>Recent Posts</Label>
          <Button variant="link"> View all</Button>
        </div>
        <div className="container flex flex-row overflow-x-auto flex-wrap  gap-8 justify-around">
          <Card className="w-96 h-80 cursor-pointer">
            <CardHeader>
              <CardTitle>Creating an Animated Login Form</CardTitle>
              <CardDescription>23 Jan | Animated Layout</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sit
              animi iure quae nemo. Laudantium error facilis quas veniam commodi
              aperiam, unde, provident accusantium possimus eligendi molestiae
              libero iure culpa!
            </CardContent>
          </Card>
          <Card className="w-96 h-80 cursor-pointer">
            <CardHeader>
              <CardTitle>Creating an Animated Login Form</CardTitle>
              <CardDescription>23 Jan | Animated Layout</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sit
              animi iure quae nemo. Laudantium error facilis quas veniam commodi
              aperiam, unde, provident accusantium possimus eligendi molestiae
              libero iure culpa!
            </CardContent>
          </Card>
          <Card className="w-96 h-80 cursor-pointer">
            <CardHeader>
              <CardTitle>Creating an Animated Login Form</CardTitle>
              <CardDescription>23 Jan | Animated Layout</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sit
              animi iure quae nemo. Laudantium error facilis quas veniam commodi
              aperiam, unde, provident accusantium possimus eligendi molestiae
              libero iure culpa!
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
