import { Link } from "react-router";
import type { Movie } from "../../types/movie.types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      to={`/peliculas/${movie.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#18181b] transition duration-300 hover:-translate-y-1 hover:bg-[#222226]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image_url}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-amber-400">
          ★ {movie.stars.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="line-clamp-2 font-semibold text-white">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-400">{movie.year}</p>

        <div className="mt-auto flex flex-wrap gap-1 pt-2">
          {movie.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="rounded bg-[#29292e] px-2 py-1 text-xs text-gray-300"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};