import Head from "next/head";
import Sidebar from "../components/Sidebar";
import MovieCard from '../components/MovieCard'
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from 'react'

export async function getStaticProps() {
  const res = await fetch(`http://omdbapi.com/?apikey=${process.env.MOVIES_API_KEY}&s=Batman`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, 
  }
}

export default function Home(props) {
  const [movies] = useState([...props.data.Search])
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full bg-gray-100">
        <Sidebar />
        <section className="flex w-full flex-col p-10 md:p-20">
          <div className="flex pb-20 flex-grow-1 justify-between">
            <div className="flex items-center space-x-2 border-b border-black">
              <SearchIcon className="h-5 text-gray-500" />
              <input type="text" className="capitalize appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="search movies..." />
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="capitalize text-gray-500">trending</h1>
              <ChevronDownIcon className="h-5 text-gray-500" />
            </div>
          </div>
          <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
              movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
            }
          </article>
        </section>
      </main>
    </div>
  );
}
