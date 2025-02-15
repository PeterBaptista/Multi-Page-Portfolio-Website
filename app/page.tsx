"use client";
import { Icons } from "@/components/icons";
import { InfoCard } from "@/components/info-card";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-10">
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
              <Link
                href={"https://www.linkedin.com/in/pedro-baptista-54b124213/"}
                className={buttonVariants({
                  variant: "ghost",
                  className: "hover:bg-muted-foreground/60 py-2",
                })}
                onClick={() => {
                  router.push(
                    "https://www.linkedin.com/in/pedro-baptista-54b124213/"
                  );
                }}
              >
                <Icons.linkedin
                  width={35}
                  height={35}
                  className="fill-foreground 0"
                />
              </Link>
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: "hover:bg-muted-foreground/60 py-2",
                })}
                href={"https://github.com/PeterBaptista"}
              >
                <Icons.gitHub
                  width={35}
                  height={35}
                  className="fill-foreground "
                />
              </Link>
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
      <div className="w-full dark:bg-muted/60 bg-muted">
        <div className="flex flex-col gap-3 container py-10 ">
          <div className=" text-3xl">Bio</div>
          <div>
            I am a passionate Front-End Developer with extensive experience in
            React, Next.js, and TypeScript, always striving to build
            high-quality, user-friendly interfaces. I&apos;ve been doing
            frontend project for about 3 years and I&apos;d love to create
            something you find useful and be satisfied with it
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="h-full pb-10 container flex flex-col gap-5">
          <div className="flex flex-row justify-between items-center py-2">
            <div className=" text-3xl">Recent projects</div>
            <Button variant="default">View all</Button>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            {mockProjects.slice(0, 3).map((item, index) => {
              return (
                <Card
                  key={item.name}
                  className="overflow-hidden w-full lg:w-1/3 hover:bg-muted/60 cursor-pointer"
                >
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
