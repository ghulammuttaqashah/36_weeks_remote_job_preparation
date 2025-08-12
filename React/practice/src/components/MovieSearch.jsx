import { useState, useEffect } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query) return; // If query is empty, do nothing
      setError(""); // Reset error message
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await fetch(
            "https://www.omdbapi.com/?apikey=thewdb&s=" + query
          );
          const data = await result.json();
          if (data.Response === "True") {
            setMovies(data.Search.slice(0,10)); // Limit to 10 results
            setError('')
          } else {
            setMovies([]);
            setError(data.Error);
          }
        } catch (e) {
          setError("Error fetching data");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        🎬 Movie Search
      </h1>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie name here!"
        className="border border-gray-300 rounded-lg px-4 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Loading */}
      {isLoading && (
        <p className="text-blue-600 font-semibold animate-pulse">Loading...</p>
      )}

      {/* Error */}
      {error && !isLoading && (
        <p className="text-red-600 font-medium">{error}</p>
      )}

      {/* Movie Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {movies.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
              alt={item.Title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{item.Title}</h2>
              <p className="text-gray-600">{item.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;