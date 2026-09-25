import type { Project } from "../data/projects";

export default function ProjectImage({ project }: { project: Project }) {
  const accent = "var(--color-accent)";
  const accent2 = "var(--color-accent-2)";
  const border = "var(--color-border)";
  const bg = "var(--color-bg-raised)";
  const text = "var(--color-text)";
  const muted = "var(--color-text-muted)";

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg)]"
      style={{
        background: `linear-gradient(135deg, ${bg} 0%, ${bg} 100%)`,
        border: `1px solid ${border}`,
      }}
      aria-label={`${project.title} preview`}
    >
      <div className="absolute inset-0 flex flex-col" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
        <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: border, background: bg }}>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28ca42" }} />
          </div>
          <span className="ml-3 text-xs text-[var(--color-text-muted)] font-mono">{project.tags[0] || "Project"}</span>
        </div>

        <div className="flex-1 p-4 overflow-hidden" style={{ fontSize: "13px", lineHeight: "1.6", color: text }}>
          <pre className="m-0 whitespace-pre-wrap break-words" style={{ fontFamily: "inherit" }}>
{`<${project.tags[0] || "div"}.${project.tags[1] ? "class" : "component"}>
  ${project.tags.map(t => `<span class="${t.toLowerCase()}">${t}</span>`).join(" ")}
  ${project.title.split(" ").map(w => `<span class="token">${w}</span>`).join(" ")}
  {"..."}
  ${"/* " + project.description.slice(0, 60) + " */"}
</${project.tags[0] || "div"}.${project.tags[1] ? "class" : "component"}>`}
          </pre>
        </div>

        <div className="px-3 py-2 border-t flex items-center justify-between text-xs" style={{ borderColor: border, background: bg }}>
          <span style={{ color: muted }}>GitHub</span>
          <span style={{ color: accent, fontWeight: 600 }}>{project.id}</span>
        </div>
      </div>
    </div>
  );
}