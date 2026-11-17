import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Movie } from "../../types/movie.types";
import { getMovieById } from "../../services/movieService";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!id || !Number.isInteger(Number(id))) {
          throw new Error("Identificador de película inválido");
        }

        const data = await getMovieById(Number(id));
        setMovie(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "No se pudo cargar la película",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <p className="p-10 text-center text-gray-400">Cargando película...</p>;
  }

  if (error || !movie) {
    return (
      <section className="p-10 text-center">
        <p className="mb-4 text-red-500">
          {error || "Película no encontrada"}
        </p>

        <Link to="/" className="text-blue-400 hover:underline">
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0d] px-5 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[300px_1fr]">
        <img
          src={movie.image_url}
          alt={movie.title}
          className="mx-auto w-full max-w-[300px] rounded-xl object-cover shadow-xl"
        />

        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-2 text-sm text-blue-400">
              {movie.year}
            </p>

            <h1 className="text-3xl font-bold md:text-5xl">
              {movie.title}
            </h1>
          </div>

          <p className="text-lg text-amber-400">
            ★ {movie.stars.toFixed(1)} / 5
          </p>

          <div className="flex flex-wrap gap-2">
            {movie.genre.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-[#25252a] px-3 py-1 text-sm text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Sinopsis
            </h2>

            <p className="leading-relaxed text-gray-300">
              {movie.description}
            </p>
          </div>

          <Link
            to="/Explorer"
            className="mt-4 w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
          >
            Volver a películas
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;