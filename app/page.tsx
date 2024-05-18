import Link from "next/link";
export default function Home() {
  return (
    <main className="h-screen">
      <div className="text-center my-40 bg-black text-white mx-60 py-10 text-3xl rounded-3xl ">
        <Link href={"/casino/games/limbo"}>Click here For Casino Game</Link>
      </div>
    </main>
  );
}
