import { ArrowLeft, RefreshCw } from "lucide-react";
import type { PageType } from "../App";
import { useGetAllSubmissions } from "../hooks/useQueries";

interface AdminSubmissionsPageProps {
  onNavigate: (page: PageType) => void;
}

function formatTimestamp(ts: bigint): string {
  try {
    // Backend stores timestamps in nanoseconds (IC standard)
    const ms = Number(ts / BigInt(1_000_000));
    return new Date(ms).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(ts);
  }
}

export function AdminSubmissionsPage({
  onNavigate,
}: AdminSubmissionsPageProps) {
  const {
    data: submissions,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetAllSubmissions();

  return (
    <main className="flex-1 bg-background">
      {/* Header */}
      <section className="bg-pu-red py-12 px-4 relative">
        <div className="max-w-6xl mx-auto relative">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="absolute top-0 left-0 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-body"
            data-ocid="admin.back_link"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <div className="text-center pt-10">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2">
              Contact Form Submissions
            </h1>
            <p className="text-white/70 text-sm font-body mt-2">
              Admin panel — all submissions stored in the backend
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 bg-background" data-ocid="admin.section">
        <div className="max-w-6xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-pu-red">
              {submissions
                ? `${submissions.length} Submission${submissions.length !== 1 ? "s" : ""}`
                : "Submissions"}
            </h2>
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-2 border-2 border-pu-red text-pu-red font-semibold text-sm px-5 py-2 rounded-sm transition-all duration-200 hover:bg-pu-red hover:text-white font-body disabled:opacity-50"
              data-ocid="admin.refresh_button"
            >
              <RefreshCw
                size={15}
                className={isFetching ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>

          {/* Loading */}
          {isLoading && (
            <div
              className="py-20 text-center text-muted-foreground font-body"
              data-ocid="admin.loading_state"
            >
              <div className="w-10 h-10 border-4 border-pu-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              Loading submissions…
            </div>
          )}

          {/* Error */}
          {isError && (
            <div
              className="py-12 text-center bg-destructive/10 border border-destructive/30 rounded-lg"
              data-ocid="admin.error_state"
            >
              <p className="text-destructive font-body font-semibold text-base mb-2">
                Failed to load submissions
              </p>
              <p className="text-muted-foreground font-body text-sm">
                The backend may not be ready yet. Try refreshing.
              </p>
            </div>
          )}

          {/* Empty */}
          {!isLoading &&
            !isError &&
            submissions &&
            submissions.length === 0 && (
              <div
                className="py-16 text-center bg-card border border-border rounded-lg"
                data-ocid="admin.empty_state"
              >
                <p className="text-muted-foreground font-body text-lg">
                  No submissions yet.
                </p>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Contact form submissions will appear here once someone
                  submits.
                </p>
              </div>
            )}

          {/* Table */}
          {!isLoading && !isError && submissions && submissions.length > 0 && (
            <div
              className="overflow-x-auto rounded-lg border border-border shadow-sm"
              data-ocid="admin.table"
            >
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-pu-red text-white">
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      #
                    </th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      Product Interest
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Message
                    </th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                      Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub, index) => (
                    <tr
                      key={String(sub.id)}
                      className={`border-t border-border ${index % 2 === 0 ? "bg-card" : "bg-muted/30"} hover:bg-secondary/40 transition-colors`}
                      data-ocid={`admin.item.${index + 1}`}
                    >
                      <td className="px-4 py-3 text-muted-foreground font-medium">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-foreground font-medium whitespace-nowrap">
                        {sub.name}
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        <a
                          href={`mailto:${sub.email}`}
                          className="text-pu-red hover:underline"
                        >
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-foreground whitespace-nowrap">
                        {sub.phone || "—"}
                      </td>
                      <td className="px-4 py-3 text-foreground whitespace-nowrap">
                        {sub.productInterest || "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground max-w-xs">
                        <span className="line-clamp-2">{sub.message}</span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {formatTimestamp(sub.timestamp)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
