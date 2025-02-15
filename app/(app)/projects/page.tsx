"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockProjects } from "@/mock/mock-data";
import Image from "next/image";
export default function Page() {
  return (
    <section className="flex flex-col gap-10 w">
      <div>
        <h1 className="text-4xl container">My Projects</h1>
      </div>
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-[2%] ">
          {mockProjects.map((item, index) => {
            return (
              <Card
                key={item.name}
                className="overflow-hidden w-full lg:w-[23.5%]  hover:bg-muted/60 cursor-pointer lg:mb-10"
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
    </section>
  );
}
