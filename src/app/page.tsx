import IconGrid from "@/components/IconGrid";
import iconsData from "@/mocks/icons";
import IconConfiguration from "@/components/IconConfiguration";
import prisma from "@/lib/prisma";
import SearchBar from "@/components/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const iconsData = await prisma.icon.findMany({
    where: {
      name: {
        contains: searchParams.search || "",
      },
    },
  });

  return (
    <main className="h-screen mt-12 pb-12 flex flex-col gap-12">
      <div className="flex gap-12">
        
      <SearchBar />
      </div>

      <div className="rounded-xl  bg-slate-50 w-full p-12 relative">
        {iconsData.length ? (
          <IconGrid icons={iconsData} />
        ) : (
          <p>Aucun correspond à la recherche</p>
        )}
        <IconConfiguration />
      </div>
    </main>
  );
}
