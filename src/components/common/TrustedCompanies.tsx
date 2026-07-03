const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "⬢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Framer Motion", icon: "⧉" },
];

export function TrustedCompanies() {
  return (
    <div>
      <p className="text-secondary/60 text-[11px] font-medium uppercase tracking-[0.15em] mb-4">
        Built with
      </p>
      <div className="flex flex-wrap items-center gap-7">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 text-secondary/40 select-none"
          >
            <span className="text-base">{tech.icon}</span>
            <span className="text-[13px] font-semibold tracking-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

