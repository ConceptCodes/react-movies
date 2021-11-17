import Head from "next/head";
import Sidebar from "../components/Sidebar";
import MovieCard from '../components/MovieCard'
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full bg-gray-100">
        <Sidebar />
        <section className="flex w-full flex-col p-20">
          <div className="flex pb-20 justify-between">
            <div className="flex items-center space-x-2">
              <SearchIcon className="h-5 text-gray-500" />
              <h1 className="capitalize text-gray-500">search movies...</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="capitalize text-gray-500">trending</h1>
              <ChevronDownIcon className="h-5 text-gray-500" />
            </div>
          </div>
          <article className="grid grid-cols-2 gap-10">
            {
              [...Array(8)].map((index) => <MovieCard key={index} />)
            }
            <MovieCard />
          </article>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
