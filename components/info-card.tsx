import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InfoCard({
  years,
  description,
  className,
}: {
  years: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className="p-0">
      <CardContent
        className={cn(
          " flex flex-col justify-center items-center p-10 rounded-md min-w-52",
          className
        )}
      >
        <div className="text-4xl">{years}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  );
}
