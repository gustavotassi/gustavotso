export interface Project {
  name: string
  /** One line on what it is — shown under the name. */
  description: string
  link?: string
  /** Display range, e.g. "2025 — 2026". */
  period: string
  /** Short descriptors: what it is, where it runs. */
  tags: string[]
}
