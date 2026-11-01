/**
 * Schematic project previews — deliberately not screenshots.
 *
 * A real screenshot at card size is unreadable noise, and stock photography
 * says nothing about the work. A wireframe reads instantly, matches the site
 * it sits on, and never goes stale when the underlying project changes.
 */

export type ProjectKind =
  | "saas"
  | "inbox"
  | "catalogue"
  | "dashboard"
  | "threepanel"
  | "article"
  | "product"
  | "fashion";

const bar = "rounded bg-white/[0.16]";
const block = "rounded-md bg-white/[0.07]";
const accent = "rounded-md bg-primary/40";
const lime = "rounded bg-secondary/30";

export default function ProjectFrame({
  host,
  kind,
}: {
  host: string;
  kind: ProjectKind;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-[#0C0C0C]">
      <div className="flex items-center gap-2 border-b border-[#222222] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#2E2E2E]" />
          <span className="h-2 w-2 rounded-full bg-[#2E2E2E]" />
          <span className="h-2 w-2 rounded-full bg-[#2E2E2E]" />
        </span>
        <span className="ml-1.5 flex-1 truncate rounded-md bg-[#161616] px-2.5 py-1 text-[10.5px] font-medium text-gray-500">
          {host}
        </span>
      </div>
      <div className="flex-1 p-4">
        <Schematic kind={kind} />
      </div>
    </div>
  );
}

function Schematic({ kind }: { kind: ProjectKind }) {
  // marketing site: hero headline + call to action + three feature cards
  if (kind === "saas") {
    return (
      <div className="flex h-full flex-col gap-2.5">
        <div className={block + " flex flex-1 flex-col justify-center gap-2 p-4"}>
          <span className={bar + " h-2.5 w-3/5"} />
          <span className={bar + " h-2.5 w-2/5 opacity-60"} />
          <span className={accent + " mt-1 h-4 w-24"} />
        </div>
        <div className="grid h-[38%] grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={block + " flex flex-col justify-end gap-1.5 p-2"}>
              <span className={bar + " h-1.5 w-2/3"} />
              <span className={bar + " h-1 w-full opacity-50"} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // shared team inbox: conversation list + open thread
  if (kind === "inbox") {
    return (
      <div className="flex h-full gap-2.5">
        <div className="flex w-[34%] flex-col justify-between rounded-md bg-white/[0.04] p-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-white/[0.14]" />
              <span className="flex flex-1 flex-col gap-1">
                <span className={bar + " h-1.5 w-4/5 " + (i === 0 ? "" : "opacity-50")} />
                <span className={bar + " h-1 w-3/5 opacity-30"} />
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 rounded-md bg-white/[0.04] p-3">
          <span className={block + " h-5 w-3/5 self-start"} />
          <span className={accent + " h-5 w-2/5 self-end"} />
          <span className={block + " h-5 w-1/2 self-start"} />
          <span className={accent + " h-5 w-[45%] self-end"} />
          <span className={bar + " mt-1 h-4 w-full opacity-40"} />
        </div>
      </div>
    );
  }

  // wholesale catalogue: filter rail + product grid
  if (kind === "catalogue") {
    return (
      <div className="flex h-full gap-2.5">
        <div className="flex w-[22%] flex-col gap-2 rounded-md bg-white/[0.04] p-2.5">
          <span className={bar + " h-1.5 w-3/4"} />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={bar + " h-1.5 w-full opacity-40"} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className={block + " h-6 flex-1"} />
            <div className={accent + " h-6 w-14"} />
          </div>
          <div className="grid flex-1 grid-cols-4 grid-rows-2 gap-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className={block + " flex flex-col justify-end p-1.5"}>
                <span className={bar + " h-1 w-2/3"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // admin dashboard: nav rail + stat row + chart
  if (kind === "dashboard") {
    return (
      <div className="flex h-full gap-2.5">
        <div className="flex w-[16%] flex-col gap-1.5 rounded-md bg-white/[0.04] p-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={bar + " h-1.5 w-full " + (i === 0 ? "" : "opacity-40")} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={block + " flex flex-col gap-1 p-2"}>
                <span className={bar + " h-1 w-1/2 opacity-50"} />
                <span className={(i === 0 ? lime : bar) + " h-2 w-3/5"} />
              </div>
            ))}
          </div>
          <div className={block + " flex flex-1 items-end gap-1.5 p-2.5"}>
            {[40, 62, 34, 78, 52, 88, 46].map((h, i) => (
              <span
                key={i}
                className={(i === 5 ? accent : "rounded-sm bg-white/[0.14]") + " flex-1"}
                style={{ height: h + "%" }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // three-sided platform: nav rail + order list + detail pane
  if (kind === "threepanel") {
    return (
      <div className="flex h-full gap-2.5">
        <div className="flex w-[18%] flex-col gap-1.5 rounded-md bg-white/[0.04] p-2">
          <span className={bar + " h-1.5 w-full"} />
          <span className={bar + " h-1.5 w-4/5 opacity-50"} />
          <span className={bar + " h-1.5 w-3/5 opacity-50"} />
        </div>
        <div className="flex w-[36%] flex-col gap-1.5 rounded-md bg-white/[0.04] p-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={block + " flex items-center gap-1.5 p-1.5"}>
              <span
                className={
                  "h-2 w-2 shrink-0 rounded-full " +
                  (i === 1 ? "bg-secondary/60" : "bg-white/20")
                }
              />
              <span className={bar + " h-1 flex-1 opacity-60"} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-md bg-white/[0.04] p-2.5">
          <span className={block + " h-[45%] w-full"} />
          <span className={bar + " h-1.5 w-3/4"} />
          <span className={bar + " h-1.5 w-1/2 opacity-50"} />
          <span className={accent + " mt-auto h-4 w-20"} />
        </div>
      </div>
    );
  }

  // long-form article: title, body copy, sidebar
  if (kind === "article") {
    return (
      <div className="flex h-full gap-3">
        <div className="flex flex-[2] flex-col gap-2">
          <span className={bar + " h-2.5 w-4/5"} />
          <span className={bar + " h-1.5 w-1/3 opacity-40"} />
          <div className="mt-1 flex flex-1 flex-col gap-1.5">
            {[100, 95, 88, 97, 72].map((w, i) => (
              <span key={i} className={bar + " h-1 opacity-45"} style={{ width: w + "%" }} />
            ))}
            <span className={accent + " mt-1 h-1 w-1/4"} />
            {[92, 80].map((w, i) => (
              <span key={i} className={bar + " h-1 opacity-45"} style={{ width: w + "%" }} />
            ))}
          </div>
        </div>
        <div className="flex w-[26%] flex-col gap-2">
          <div className={block + " h-[42%]"} />
          <span className={bar + " h-1 w-full opacity-40"} />
          <span className={bar + " h-1 w-4/5 opacity-40"} />
          <span className={bar + " h-1 w-3/5 opacity-40"} />
        </div>
      </div>
    );
  }

  // single-product page: gallery + buy panel
  if (kind === "product") {
    return (
      <div className="flex h-full gap-2.5">
        <div className="flex flex-[3] flex-col gap-2">
          <div className={block + " flex-1"} />
          <div className="grid h-[26%] grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={block + (i === 0 ? " ring-1 ring-primary/50" : "")} />
            ))}
          </div>
        </div>
        <div className="flex flex-[2] flex-col gap-2 rounded-md bg-white/[0.04] p-2.5">
          <span className={bar + " h-2 w-4/5"} />
          <span className={lime + " h-2 w-1/2"} />
          <div className="mt-1 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-4 flex-1 rounded border border-white/15" />
            ))}
          </div>
          <span className={accent + " mt-auto h-5 w-full"} />
        </div>
      </div>
    );
  }

  // fashion storefront: full-bleed hero + product row
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className={block + " flex h-[52%] items-end p-3"}>
        <span className={bar + " h-2.5 w-1/3"} />
      </div>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className={block + " flex-1"} />
            <span className={bar + " h-1 w-3/4 opacity-50"} />
          </div>
        ))}
      </div>
    </div>
  );
}
