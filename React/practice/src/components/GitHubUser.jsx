import { useState, useEffect } from "react";

function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchTerm.trim()) return; 

      const fetchData = async () => {
        try {
          setIsLoading(true);
          const result = await fetch(
            `https://api.github.com/search/users?q=${searchTerm}`
          );
          const data = await result.json();
          if (data.items && data.items.length > 0) {
            setUsers(data.items);
            
          } else {
            setUsers([]);
          }
          setIsLoading(false);
        } catch (e) {
          console.error("Error fetching data:", e);
          setIsLoading(false);
        }
      };
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        GitHub Search Bar
      </h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a user..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      {isLoading && <p className="text-blue-600 font-semibold">Loading...</p>}

      {!isLoading && users.length === 0 && searchTerm.trim() && (
        <p className="text-gray-500 mt-4">No users found.</p>
      )}

      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {users.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200 flex items-center gap-4"
          >
            <img
              src={item.avatar_url}
              alt={item.login}
              className="w-16 h-16 rounded-full border border-gray-200"
            />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                {item.login}
              </h2>
              <a
                href={item.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GitHubUsers;
