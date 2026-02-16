import { useEffect, useMemo } from "react";

function safeDateValue(dateStr, timeStr) {
  if (!dateStr) return 0;
  // Prefer ISO-like combination if time is provided.
  if (timeStr) {
    const d = new Date(`${dateStr}T${timeStr}`);
    if (!Number.isNaN(d.getTime())) return d.getTime();
  }
  const d = new Date(dateStr);
  if (!Number.isNaN(d.getTime())) return d.getTime();
  return 0;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function formatTime(timeStr) {
  if (!timeStr) return "";
  const [hh, mm] = String(timeStr).split(":");
  const hour24 = Number(hh);
  if (Number.isNaN(hour24) || mm == null) return timeStr;
  const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
  const ampm = hour24 >= 12 ? "PM" : "AM";
  return `${hour12}:${mm} ${ampm}`;
}

export default function EventsSidebar({ open, onClose, events = [], loading = false, error = "" }) {
  const sortedEvents = useMemo(() => {
    const list = Array.isArray(events) ? [...events] : [];
    list.sort((a, b) => safeDateValue(b?.date, b?.time) - safeDateValue(a?.date, a?.time));
    return list;
  }, [events]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Overlay + sidebar
  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay (click anywhere to close) */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => onClose?.()}
      />

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Events"
        className={[
          "absolute left-0 top-0 h-full",
          "w-[85%] sm:w-[60%] lg:w-[25%]",
          "bg-slate-50 dark:bg-slate-950 text-white border-r border-slate-800",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-16 flex items-center justify-between px-4 shadow-md dark:shadow-zinc-800">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-slate-900 dark:text-slate-50">Events</div>
            <div className="text-xs text-slate-800 dark:text-slate-300">Latest updates from the CMS</div>
          </div>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="p-2 rounded-md font-bold text-slate-800 dark:text-slate-300 hover:text-blue-900 transition-colors"
            aria-label="Close events sidebar"
            title="Close"
          >
            ✕
          </button>
        </div>

        <div
          className={
            "h-[calc(100%-4rem)] overflow-y-auto px-4 py-4 " +
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-200 dark:[&::-webkit-scrollbar-track]:bg-slate-800 " +
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:hover:bg-slate-500 " +
            "dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 dark:[&::-webkit-scrollbar-thumb]:hover:bg-slate-500"
          }
          style={{
            scrollbarWidth: 'thin'
          }}
        >
          {loading ? (
            <div className="text-sm text-slate-800 dark:text-slate-300">Loading events…</div>
          ) : error ? (
            <div className="text-sm text-red-300 dark:text-red-600">{error}</div>
          ) : sortedEvents.length === 0 ? (
            <div className="text-sm text-slate-800 dark:text-slate-300">No events available right now.</div>
          ) : (
            <div className="space-y-4">
              {sortedEvents.map((ev) => {
                const dateLabel = formatDate(ev?.date);
                const timeLabel = formatTime(ev?.time);
                const when = [dateLabel, timeLabel].filter(Boolean).join(" • ");
                return (
                  <article
                    key={ev?._id ?? `${ev?.title ?? "event"}-${ev?.date ?? ""}-${ev?.time ?? ""}`}
                    className="rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {ev?.flyer ? (
                      <img
                        src={ev.flyer}
                        alt={ev?.title ? `${ev.title} flyer` : "Event flyer"}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                    ) : null}

                    <div className="p-4">
                      <div className="font-semibold text-base leading-snug line-clamp-2 text-slate-900 dark:text-slate-50">
                        {ev?.title || "Untitled event"}
                      </div>

                      {when ? (
                        <div className="mt-2 text-xs text-slate-600 dark:text-slate-300">{when}</div>
                      ) : null}

                      {ev?.location ? (
                        <div className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-1">
                          {ev.location}
                        </div>
                      ) : null}

                      {ev?.description ? (
                        <p className="mt-3 text-sm text-slate-700 dark:text-slate-100/90 line-clamp-4">
                          {ev.description}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

