import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-primary">
        Tailwind + Shadcn Test
      </h1>
      <p className="text-muted-foreground">
        If you can see styling and a button, youre golden.
      </p>
      <Button variant="default">Click Me</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
