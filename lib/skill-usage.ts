import { projects, type Project } from "./data";

const TOKEN_RE = /[a-z0-9.+#]+/gi;

function tokens(s: string): string[] {
  return s.toLowerCase().match(TOKEN_RE) ?? [];
}

function skillMatchesTech(skillName: string, techEntry: string): boolean {
  const skillTokens = tokens(skillName);
  if (skillTokens.length === 0) return false;
  const techTokens = new Set(tokens(techEntry));
  return skillTokens.every((t) => techTokens.has(t));
}

export function projectsForSkill(skillName: string): Project[] {
  return projects.filter((p) =>
    p.tech.some((t) => skillMatchesTech(skillName, t)),
  );
}

export function summarizeUsage(skillName: string, max: number = 2): string {
  const used = projectsForSkill(skillName);
  if (used.length === 0) return "";
  const head = used
    .slice(0, max)
    .map((p) => p.name)
    .join(", ");
  const remainder = used.length - max;
  return remainder > 0 ? `${head} +${remainder} more` : head;
}
