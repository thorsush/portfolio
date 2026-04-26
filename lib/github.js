const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "YOUR_USERNAME";

export async function getTopRepositories(limit = 4) {
  if (!GITHUB_USERNAME || GITHUB_USERNAME === "YOUR_USERNAME") {
    return {
      repos: [],
      error: "Set NEXT_PUBLIC_GITHUB_USERNAME in .env.local to load GitHub repositories.",
    };
  }

  const endpoint = `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return {
        repos: [],
        error: "Unable to load repositories right now. Please try again later.",
      };
    }

    const repositories = await response.json();
    const topRepos = repositories
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, limit)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided.",
        htmlUrl: repo.html_url,
      }));

    return { repos: topRepos, error: null };
  } catch {
    return {
      repos: [],
      error: "Unable to reach GitHub API. Please check your connection and try again.",
    };
  }
}

export { GITHUB_USERNAME };
