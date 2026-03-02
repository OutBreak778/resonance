import { prisma } from "@/lib/database";

export default async function Home() {
  const data = await prisma.voice.findMany({
    where: {
      name: "Nikhil"
    }
  })

  console.log(data)
  return (
    <div className="flex min-h-screen items-center justify-center">
      {data.map((item) => (
        <div key={item.id}>
          {item.name},
          {item.variant}
        </div>
      ))}
    </div>
  );
}
