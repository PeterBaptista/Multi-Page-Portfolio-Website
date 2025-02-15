import { Icons } from "@/components/icons";
import { InfoCard } from "@/components/info-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import profilePhoto from "@/public/foto.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-20  ">
      <section className=" w-full flex space-x-16 gap-20 justify-center items-center mb-28 flex-col-reverse lg:flex-row container min-h-[400px]">
        <div className=" flex flex-col gap-5  w-full lg:w-2/3">
          <h1 className="text-4xl">
            Hello, I&apos;m Pedro,
            <br /> Front-end Developer
          </h1>
          <p className="">
            Expert Front-End Developer | Specializing in React, Next.js &
            TypeScript Development
          </p>
          <div className="flex  flex-col lg:flex-row gap-5 flex-wrap">
            <InfoCard
              className="bg-gradient-to-r from-rose-500 to-amber-500"
              years="2+"
              description="years experience"
            />
            <InfoCard
              className="bg-gradient-to-r from-violet-500 to-fuchsia-300"
              years="40+"
              description="projects"
            />
            <InfoCard
              className="bg-gradient-to-r from-emerald-400 to-cyan-400"
              years="4+"
              description="clients"
            />
          </div>
          <Card className="w-fit">
            <CardContent className="py-4  ">
              <Button
                variant="ghost"
                className="hover:bg-muted-foreground/60 py-2"
              >
                <Icons.linkedin
                  width={35}
                  height={35}
                  className="fill-foreground 0"
                />
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-muted-foreground/60 py-2"
              >
                <Icons.gitHub
                  width={35}
                  height={35}
                  className="fill-foreground "
                />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className=" w-full lg:w-1/3  flex justify-center items-center ">
          <Image
            src={profilePhoto}
            alt="profile photo"
            width={300}
            height={300}
            className="rounded-xl w-full  object-fit"
          />
        </div>
      </section>
      <section className="flex flex-col bg-muted h-full pb-24 w-full space-y-8">
        <div className="flex flex-row   justify-between items-center container">
          <Label>Recent projects</Label>
          <Button variant="link"> View all</Button>
        </div>
        <div className="container flex flex-row overflow-x-auto h-full flex-wrap  gap-8 justify-around">
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
