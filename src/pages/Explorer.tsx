import { MovieList } from "../components/movies/MovieList";

const Explorer = () => {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">
          Explorar películas
        </h1>

        <p className="mb-8 text-gray-400">
          Descubrí películas y encontrá tu próxima favorita.
        </p>

        <MovieList />
      </div>
    </main>
  );
};

export default Explorer;
