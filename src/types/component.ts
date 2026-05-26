// ── Component metadata contract ───────────────────────────────────────────────
// Template developers annotate their components with a sidecar .meta.ts file
// that exports a ComponentMeta object defined via defineMeta().
//
// SellHapi's build pipeline reads these files to:
//   1. Build the component manifest served at /api/components
//   2. Populate the studio component browser
//   3. Validate snippet compatibility against the SDK version
//
// First-party (default template) components ship with metadata in
// sell_store/src/lib/components/registry.ts.
// Third-party components attach metadata when submitting for approval.

export type ComponentCategory =
  | "layout"
  | "commerce"
  | "navigation"
  | "data"
  | "utilities";

// Which page.type contexts a component is meaningful in.
// "*" means it applies to every page type.
export type PageContextType =
  | "home"
  | "category"
  | "all-products"
  | "sale"
  | "collection"
  | "section"
  | "product"
  | "*";

// A single import statement the snippet requires.
// source: the module specifier (e.g. "@sellhapi/template-sdk" or "./components/SectionCarousel")
// named: the named exports to import (e.g. ["SectionCarousel", "ProductGrid"])
// default: optional default import (e.g. "Image" from "next/image")
export interface ComponentImport {
  source:   string;
  named?:   string[];
  default?: string;
}

export interface ComponentMeta {
  // Stable, kebab-case, unique across the registry (e.g. "section-carousel")
  id:          string;

  // Human-readable display name shown in the studio browser
  name:        string;

  // Short description — one sentence, shown as subtitle in browser card
  description: string;

  // Which panel section this appears in
  category:    ComponentCategory;

  // Page types where this component makes semantic sense.
  // The studio dims (but does not hide) components not in the current context.
  pageContexts: PageContextType[];

  // Top-level TemplateProps keys the snippet reads from.
  // Guides the studio's context-awareness warnings.
  requiredProps: Array<"vendor" | "config" | "homepage" | "navigation" | "announcements" | "footer" | "page">;

  // Imports the AST inserter will add to the file if not already present.
  imports:     ComponentImport[];

  // The JSX code string to insert at the cursor.
  // Assumes top-level TemplateProps are destructured as:
  //   const { vendor, config, homepage, navigation, announcements, footer, page } = props;
  insertSnippet: string;

  // Minimum SDK version required for this component's API surface.
  sdkVersion:  string;
}

// Helper that returns its argument typed. Provides IDE autocomplete
// and compile-time validation when writing .meta.ts files.
export function defineMeta(meta: ComponentMeta): ComponentMeta {
  return meta;
}
