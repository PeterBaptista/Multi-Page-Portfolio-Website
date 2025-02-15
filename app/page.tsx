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
import { mockProjects } from "@/mock/mock-data";
import profilePhoto from "@/public/foto.png";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="container lg:w-1/3">
          <Image
            src={profilePhoto}
            height={500}
            width={500}
            alt="profile photo"
            className="object-cover rounded-md max-h-60 lg:max-h-[600px]"
          />
        </div>

        <div className=" flex flex-col gap-5  w-full  container lg:w-2/3">
          <h1 className="text-4xl">
            Hello, I&apos;m Pedro,
            <br /> Front-end Developer
          </h1>
          <p className="">
            Expert Front-End Developer | Specializing in React, Next.js &
            TypeScript Development
          </p>
          <div className="flex  flex-col  lg:flex-row  gap-5 ">
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
          <Card className="w-full ">
            <CardContent className="py-4  flex items-center justify-center ">
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

          <Card className="w-full ">
            <CardHeader>
              <CardTitle className="text-3xl">
                Bring your ideas to life through Frontend design
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4  flex items-center justify-center ">
              <Button className="w-full py-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-foreground text-xl">
                Hire now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full bg-gray-800 ">
        <div className="h-full pb-10 container flex flex-col gap-5">
          <div className="flex flex-row justify-between items-center py-2">
            <div>Recent projetcs</div>
            <Button variant="default">View all</Button>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            {mockProjects.map((item, index) => {
              return (
                <Card key={item.name} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-full w-full p-0 overflow-hidden">
                    <Image
                      height={500}
                      width={500}
                      src={item.image_url}
                      alt="profile photo"
                      className="object-cover  h-64 w-full overflow-hidden"
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
