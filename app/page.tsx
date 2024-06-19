import Repos from "@/components/Repos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">
      <h1 className="text-4xl">Github-Repo-Showcase</h1>
      <Repos />
    </main>
  );
}
