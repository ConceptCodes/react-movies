import Image from "next/image";
import { StarIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function MovieCard({ movie }) {
  return (
    <figure className="bg-white flex flex-col space-y-2 p-5 filter drop-shadow-xl">
      <div className="flex space-x-4 items-start">
        <div className="filter drop-shadow-xl transform -translate-y-10">
          <Image
            src={movie ? movie.Poster : "https://via.placeholder.com/100"}
            width={100}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-2xl capitalize">{ movie ? movie.Title : 'Movie Title'}</h1>
          <p className="capitalize text-gray-300">{ movie ? movie.Genre : 'Movie Genre'}</p>
          <div className="flex py-2">
            {[...Array(4)].map((index) => (
              <StarIcon key={index} className="text-yellow-500 h-4" />
            ))}
          </div>
          <p className="text-gray-500 overflow-ellipsis">
            {movie ? movie.Plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam'}
          </p>
        </div>
        <DotsVerticalIcon className="h-14 text-gray-400" />
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="col-start-2 row-start-1 row-end-3">
          <p className="sr-only">Users</p>
          <div className="flex space-x-10 items-center">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
              {[...Array(3)].map((index) => (
                <img
                  src="https://via.placeholder.com/200"
                  alt="title"
                  width="40"
                  height="40"
                  className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-500 text-xs">{movie ? movie.Director : 'Concept'} and 4 other's are watching this</p>
            <div className="flex text-blue-500 cursor-pointer filter drop-shadow-md">
              <ThumbUpIcon className="h-5 text-blue-500" />
              42
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
