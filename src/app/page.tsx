export default function Home() {
  return (
    <main className="h-screen mt-12 pb-12 flex gap-12 relative">
      <div className="w-96 h-full rounded-xl  bg-white"></div>
      <div className="rounded-xl  bg-white w-full p-12">
        <div className="flex gap-12">
          <input
            className="bg-slate-100 w-full rounded-xl px-8 py-4"
            type="text"
            placeholder="Rechercher"
          />
          <select className="bg-slate-100 w-60 rounded-xl px-8 py-4">
            <option>Test</option>
          </select>
        </div>
        <div className="mt-12 w-full flex gap-4 flex-wrap">
          <div className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-xl cursor-pointer hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          </div>
          
        </div>
      </div>
    </main>
  );
}
