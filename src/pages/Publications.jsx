import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavPageContext } from "../context/NavPageContext";

const Publications = () => {
  const { BASEURL } = useContext(NavPageContext);
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        setError(null);

        const resp = await axios.get(`${BASEURL}/pub/getpublications`);
        const data = resp.data?.data || [];

        // Sort by date (newest first)
        const sorted = [...data].sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        });

        setPublications(sorted);
      } catch (err) {
        console.error("Failed to fetch publications:", err);
        setError("Unable to load publications at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [BASEURL]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-16 text-slate-900 dark:text-slate-100">
      {/* Hero / Header */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-gray-50 via-white/80 to-gray-50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400 uppercase mb-3">
            Research Output
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Publications &amp; Papers
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Discover the latest peer‑reviewed papers, technical reports, and
            conference publications produced by CSTD and its collaborators.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center gap-3">
              <span className="h-10 w-10 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Loading latest publications...
              </p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-red-500/40 bg-red-900/30 px-5 py-4">
            <p className="text-sm text-red-100 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && publications.length === 0 && (
          <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 px-5 py-10 text-center">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">
              No publications available yet.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Please check back later as new publications are added.
            </p>
          </div>
        )}

        {!loading && !error && publications.length > 0 && (
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub._id}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200/60 dark:shadow-black/40 px-5 sm:px-6 py-5 sm:py-6"
              >
                {/* Header: title + date */}
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="lg:w-[80%]">
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                      {pub.title}
                    </h2>
                    {pub.date && (
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Published on{" "}
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {new Date(pub.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </p>
                    )}
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center self-start rounded-full border border-blue-500/70 bg-blue-600/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-900/50 hover:bg-blue-500 hover:border-blue-400 transition-colors"
                    >
                      View publication
                      <svg
                        className="ml-1.5 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </header>

                {/* Authors */}
                {Array.isArray(pub.authors) && pub.authors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pub.authors.map((author, idx) => (
                      <span
                        key={`${pub._id}-author-${idx}`}
                        className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800/90 px-3 py-1 text-[0.7rem] sm:text-xs text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {author}
                      </span>
                    ))}
                  </div>
                )}

                {/* Summary / abstract snippet */}
                {pub.summary && (
                  <div className="mt-2 text-sm sm:text-[0.95rem] text-slate-600 dark:text-slate-200/90 leading-relaxed line-clamp-4 prose dark:prose-invert prose-sm prose-p:text-slate-600 dark:prose-p:text-slate-200 max-w-none prose-p:m-0">
                    <div
                      dangerouslySetInnerHTML={{ __html: pub.summary }}
                    ></div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Publications;
