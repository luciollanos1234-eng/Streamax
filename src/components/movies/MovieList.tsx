import { useMemo, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { movies, isLoading, error } = useMovies();

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const genres = useMemo(() => {
    const allGenres = movies.flatMap((movie) => movie.genre);

    return ["Todos", ...new Set(allGenres)].sort((a, b) => {
      if (a === "Todos") return -1;
      if (b === "Todos") return 1;
      return a.localeCompare(b);
    });
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre === "Todos" ||
        movie.genre.includes(selectedGenre);

      return matchesSearch && matchesGenre;
    });
  }, [movies, search, selectedGenre]);

  if (isLoading) {
    return (
      <p className="py-10 text-center text-gray-400">
        Cargando películas...
      </p>
    );
  }

  if (error) {
    return (
      <p role="alert" className="py-10 text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-6">
      <input
        type="search"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-[#29292e] bg-[#18181b] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500"
      />
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            type="button"
            onClick={() => setSelectedGenre(genre)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedGenre === genre
                ? "bg-blue-500 text-white"
                : "bg-[#18181b] text-gray-400 hover:bg-[#29292e] hover:text-white"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-400">
        Mostrando {filteredMovies.length} películas
      </p>
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-gray-400">
          No se encontraron películas.
        </p>
      )}
    </section>
  );
};