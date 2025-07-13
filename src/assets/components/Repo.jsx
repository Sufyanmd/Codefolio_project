import React, { useEffect, useState } from 'react';
const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
};
const Repo = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const perPage = 12;

  

  useEffect(() => {
    if (!username) return;

    async function fetchRepos() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,{headers,});
        const data = await res.json();

        if (res.status === 404 || !Array.isArray(data)) {
          throw new Error("Repos not found");
        }

        if (data.length === 0) {
          setError("No repositories found.");
        } else {
          setRepos(data);
        }
      } catch (err) {
        setError(err.message || "Something went wrong.");
      }
      setLoading(false);
    }

    fetchRepos();
  }, [username, page]);

  return (
    <div className="mt-8 px-4">
      <h2 className="text-2xl text-center font-bold mb-6 text-pink-500 w-full max-w-6xl mx-auto px-4">Repositories</h2>
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500 font-semibold ">{error}</p>}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {repos.map((repo) => (
    <div
      key={repo.id}
      className="min-h-[220px] h-full border border-gray-700 bg-gray-900 p-4 rounded shadow-sm flex flex-col justify-between"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-semibold text-amber-200 mb-1">
            {repo.name}
          </h3>

          {/* 👇 Clamp long description to 3 lines */}
          <p className="text-sm text-gray-300 mb-2 line-clamp-3">
            {repo.description || "No description provided."}
          </p>
        </div>

        <div className="flex text-sm text-gray-400 gap-6 mt-auto">
          <span>Stars {repo.stargazers_count}</span>
          <span>Primary Language {repo.language || "Unknown"}</span>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-pink-400 underline"
          >
            View
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      {!error && repos.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-4 py-1 font-semibold rounded ${
              page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-600 text-white'
            }`}
          >
            Prev
          </button>
          <span className="text-gray-200 font-semibold">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-1 bg-pink-600 text-white font-semibold rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Repo;
